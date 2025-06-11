import { NextResponse } from 'next/server'
import { Pool } from 'pg'
import bcrypt from 'bcryptjs'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export async function POST(request: Request) {
  const { email, password } = await request.json()
  if (!email || !password) {
    return NextResponse.json({ error: 'Missing email or password' }, { status: 400 })
  }
  try {
    const { rows } = await pool.query('SELECT password FROM users WHERE email = $1', [email])
    if (rows.length === 0) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }
    const valid = await bcrypt.compare(password, rows[0].password)
    if (!valid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err: any) {
    console.error('Database error:', err.message)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
