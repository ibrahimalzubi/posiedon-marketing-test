// src/app/api/register/route.ts
import { NextResponse } from 'next/server'
import { Pool } from 'pg'
import bcrypt from 'bcryptjs'

// Create one pool (Next will reuse this module on hot reload)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export async function POST(request: Request) {
  // 1) parse the JSON body
  const { first_name, last_name, email, password, referral_source } =
    await request.json()

  // 2) validate
  if (!first_name || !last_name || !email || !password) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    )
  }

  try {
    // 3) hash password and insert
    const hashedPassword = await bcrypt.hash(password, 10)
    const { rows } = await pool.query(
      `INSERT INTO users
         (first_name, last_name, email, password, referral_source)
       VALUES ($1,$2,$3,$4,$5)
       RETURNING id, first_name, last_name, email, created_at`,
      [first_name, last_name, email, hashedPassword, referral_source]
    )

    // 4) return the new user (omit password)
    const user = rows[0]
    return NextResponse.json({ user }, { status: 201 })
  } catch (err: any) {
    console.error('Database error:', err.message)
    if (err.code === '23505') {
      // unique_violation
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      )
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
