'use client'

import { useRouter } from 'next/navigation'
import type { FormEvent } from 'react'
import { useState } from 'react'

import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'

export function RegisterForm() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      })

      if (res.ok) {
        router.push('/login')
      } else {
        setError('Registration failed')
      }
    } catch (e) {
      setError('Registration failed')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
    >
      <TextField
        label="First name"
        name="first_name"
        type="text"
        autoComplete="given-name"
        required
      />
      <TextField
        label="Last name"
        name="last_name"
        type="text"
        autoComplete="family-name"
        required
      />
      <TextField
        className="col-span-full"
        label="Email address"
        name="email"
        type="email"
        autoComplete="email"
        required
      />
      <TextField
        className="col-span-full"
        label="Password"
        name="password"
        type="password"
        autoComplete="new-password"
        required
      />
      <SelectField
        className="col-span-full"
        label="How did you hear about us?"
        name="referral_source"
      >
        <option>AltaVista search</option>
        <option>Super Bowl commercial</option>
        <option>Our route 34 city bus ad</option>
        <option>The “Never Use This” podcast</option>
      </SelectField>
      {error && (
        <p className="col-span-full text-sm text-red-600">{error}</p>
      )}
      <div className="col-span-full">
        <Button type="submit" variant="solid" color="blue" className="w-full">
          <span>
            Sign up <span aria-hidden="true">&rarr;</span>
          </span>
        </Button>
      </div>
    </form>
  )
}

