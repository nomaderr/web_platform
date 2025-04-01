'use client'

import { useState } from 'react'

export function ContactForm() {
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
    <section className="w-full max-w-[700px] h-[700px] mx-auto px-4 py-8 flex flex-col items-center justify-center bg-[#f2f2f2] dark:bg-[#2a2a2a] rounded-xl shadow-md dark:border dark:border-neutral-700">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Contact</h2>
      <div className="h-[2px] w-20 bg-gray-400 dark:bg-gray-500 rounded-full mb-4" />
      <p className="text-gray-700 dark:text-gray-300 mb-6 text-center max-w-md">
        Feel free to reach out! I usually reply within a few days.
      </p>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-800 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-800 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
        />

        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-800 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition resize-none"
        />

        <button
        
          type="submit"
          className="mt-2 px-6 py-2 rounded-full font-semibold text-white bg-teal-600 hover:bg-teal-700 transition"
        >
          Send Message
          
        </button>
      </form>
    </section>
  )
}
