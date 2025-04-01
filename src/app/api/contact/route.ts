// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { email, subject, message } = await req.json()
  console.log('🔐 ENV:', process.env.MAIL_USER, process.env.MAIL_PASSWORD?.length)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  })

  const mailOptions = {
    from: email,
    to: process.env.MAIL_RECEIVER,
    subject: subject,
    text: message,
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log('✅ Email sent:', info.response)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('❌ Mail error:', error)
    return NextResponse.json({ success: false, error })
  }
}
