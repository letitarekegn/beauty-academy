import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: Request) {
  const body = await request.json()
  const { honeypot, formLoadTime, ...data } = body

  // 1. Honeypot — real users leave this blank; bots fill it
  if (honeypot) {
    return NextResponse.json({ error: 'Invalid submission.' }, { status: 400 })
  }

  // 2. Timing — reject if form was submitted in under 3 seconds
  if (!formLoadTime || Date.now() - formLoadTime < 3000) {
    return NextResponse.json({ error: 'Submission too fast. Please try again.' }, { status: 429 })
  }

  // 3. Duplicate email guard
  const { data: existing } = await supabase
    .from('students')
    .select('id')
    .eq('email', data.email)
    .maybeSingle()

  if (existing) {
    return NextResponse.json(
      { error: 'This email address is already registered.' },
      { status: 409 }
    )
  }

  // 4. Insert
  const { error } = await supabase.from('students').insert([
    {
      full_name: data.fullName,
      email: data.email,
      phone: data.phone,
      gender: data.gender,
      age: data.age ? Number(data.age) : null,
      address: data.address,
      courses: [data.course],
      schedule: data.schedule,
      notes: data.notes,
    },
  ])

  if (error) {
    console.error('Supabase insert error:', error)
    return NextResponse.json({ error: 'Registration failed. Please try again.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
