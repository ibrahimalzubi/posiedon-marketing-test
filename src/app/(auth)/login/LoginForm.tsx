'use client'

import { useRouter } from 'next/navigation'
import type { FormEvent } from 'react'
import { useState } from 'react'

import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'

export function LoginForm() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || ''
      const res = await fetch(`${baseUrl}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      })

      if (res.ok) {
        router.push('/')
      } else {
        setError('Wrong password')
      }
    } catch (err) {
      setError('Something went wrong')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-y-8">
      <TextField
        label="Email address"
        name="email"
        type="email"
        autoComplete="email"
        required
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div>
        <Button type="submit" variant="solid" color="blue" className="w-full">
          <span>
            Sign in <span aria-hidden="true">&rarr;</span>
          </span>
        </Button>
      </div>
    </form>
  )
}

