'use client'

import { useRouter } from 'next/navigation'
import type { FormEvent } from 'react'

import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'

export function RegisterForm() {
  const router = useRouter()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData)),
    })

    router.push('/login')
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

