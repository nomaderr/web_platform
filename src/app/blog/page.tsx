'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'

interface Post {
  id: string
  title: string
  slug: string
  date: string | null
  url: string
  cover: string | null
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    fetch('/api/blog')
      .then(res => res.json())
      .then(setPosts)
      .catch(err => console.error('Error loading posts:', err))
  }, [])

  if (!mounted) return null

  const themeClass =
    theme === 'dark' ? 'bg-[#1C1C1E] text-white' : 'bg-white text-black'

  return (
    <section
      className={`flex flex-col items-center justify-start p-4 min-h-screen transition-colors duration-500 ${themeClass}`}
    >
      <div className="max-w-3xl w-full text-center mb-12 mt-8">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Cyber Nomaderr
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">
          Welcome to my blog — thoughts, projects & technology.
        </p>
      </div>

      <div className="max-w-3xl w-full flex flex-col space-y-6 md:space-y-10">
  {posts.map(post => (
    <Link key={post.id} href={post.url} target="_blank">
      <div className="group p-5 bg-[#f2f2f2] dark:bg-[#2a2a2a] rounded-2xl border border-gray-200 dark:border-neutral-700 transition-transform duration-300 transform hover:-translate-y-1 hover:scale-[1.01] shadow-md hover:shadow-2xl dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        {/* Обложка */}
        {post.cover && (
          <div className="mb-4 rounded-md overflow-hidden">
            <Image
              src={post.cover}
              alt={post.title}
              width={800}
              height={400}
              className="object-cover w-full h-48 rounded-md transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        )}
        {/* Заголовок + Дата */}
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-2xl font-semibold">{post.title}</h3>
          {post.date && (
            <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit',
              })}
            </span>
          )}
        </div>
      </div>
    </Link>
  ))}
</div>

    </section>
  )
}
