import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Pool } from 'pg'
import bcrypt from 'bcryptjs'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

app.post('/api/register', async (req, res) => {
  const { first_name, last_name, email, password } = req.body
  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    await pool.query(
      'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)',
      [first_name, last_name, email, hashedPassword],
    )
    res.json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ success: false })
  }
})

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body
  try {
    const result = await pool.query(
      'SELECT password FROM users WHERE email = $1',
      [email],
    )
    if (result.rowCount === 0) {
      return res
        .status(401)
        .json({ success: false, message: 'Invalid credentials' })
    }
    const valid = await bcrypt.compare(password, result.rows[0].password)
    if (!valid) {
      return res
        .status(401)
        .json({ success: false, message: 'Invalid credentials' })
    }
    res.json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ success: false })
  }
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
