import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const courseLabels: Record<string, string> = {
  makeup: 'Professional Makeup',
  hair: 'Hair Styling',
  nails: 'Nail Art',
  full: 'Full Beauty Package',
}

const scheduleLabels: Record<string, string> = {
  morning: 'Morning',
  afternoon: 'Afternoon',
  weekend: 'Weekend',
}

export async function POST(request: Request) {
  const { name, email, course, schedule } = await request.json()

  const courseName = courseLabels[course] ?? course
  const scheduleName = scheduleLabels[schedule] ?? schedule

  const { error } = await resend.emails.send({
    from: 'Arkani Beauty Academy <onboarding@resend.dev>',
    to: email,
    subject: 'Registration Confirmed — Arkani Beauty Academy',
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#FDF6EE;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#FDF6EE;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(44,26,14,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#7D4E24;padding:36px 40px;text-align:center;">
              <p style="margin:0;color:#FDF6EE;font-size:13px;letter-spacing:3px;text-transform:uppercase;margin-bottom:8px;">Welcome to</p>
              <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:bold;letter-spacing:1px;">Arkani Beauty Academy</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 32px;">
              <h2 style="margin:0 0 12px;color:#2C1A0E;font-size:22px;">Hi ${name},</h2>
              <p style="margin:0 0 24px;color:#7A5C3E;font-size:16px;line-height:1.7;">
                Your registration has been received and we're thrilled to welcome you to our community of beauty professionals. Here's a summary of what you signed up for:
              </p>

              <!-- Details card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#F2E4D0;border-radius:12px;margin-bottom:28px;">
                <tr>
                  <td style="padding:24px 28px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:8px 0;border-bottom:1px solid #D4B896;">
                          <span style="color:#7A5C3E;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Course</span>
                        </td>
                        <td style="padding:8px 0;border-bottom:1px solid #D4B896;text-align:right;">
                          <span style="color:#2C1A0E;font-size:15px;font-weight:bold;">${courseName}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;">
                          <span style="color:#7A5C3E;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Schedule</span>
                        </td>
                        <td style="padding:8px 0;text-align:right;">
                          <span style="color:#2C1A0E;font-size:15px;font-weight:bold;">${scheduleName}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 24px;color:#7A5C3E;font-size:15px;line-height:1.7;">
                Our team will review your registration and reach out within <strong style="color:#2C1A0E;">1–2 business days</strong> to confirm your enrollment, provide payment details, and share your class schedule.
              </p>

              <p style="margin:0;color:#7A5C3E;font-size:15px;line-height:1.7;">
                If you have any questions in the meantime, feel free to reply to this email or contact us directly.
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <hr style="border:none;border-top:1px solid #D4B896;" />
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:28px 40px;text-align:center;">
              <p style="margin:0 0 4px;color:#2C1A0E;font-size:14px;font-weight:bold;">Arkani Beauty Academy</p>
              <p style="margin:0;color:#7A5C3E;font-size:13px;">Empowering beauty professionals since 2015</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim(),
  })

  if (error) {
    console.error('Email error:', error)
    return NextResponse.json({ error }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
