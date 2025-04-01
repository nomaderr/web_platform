'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        alert('📬 Message sent!')
        setFormData({ email: '', subject: '', message: '' })
      } else {
        alert('❌ Failed to send. Try again later.')
      }
    } catch (err) {
      console.error(err)
      alert('❌ Error sending message.')
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors duration-500">
      <div className="w-full max-w-[700px] bg-[#f2f2f2] dark:bg-[#2a2a2a] rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-md bg-white dark:bg-neutral-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-md bg-white dark:bg-neutral-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            className="px-4 py-3 h-40 rounded-md bg-white dark:bg-neutral-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
          />
          <button
            type="submit"
            className="shadow-[inset_0_0_0_2px_#616467] text-black px-8 py-3 rounded-2xl tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  )
}
