'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { IconGrid } from "@/components/sections/Skills";
import { InfiniteLogoScroller } from "@/components/sections/Loop";



import Link from 'next/link';


interface HomeProps {
  className?: string
}

export function Home({ className = '' }: HomeProps) {
    
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const themeClass =
    theme === 'dark' ? 'bg-[#1C1C1E] text-white' : 'bg-white text-black'


    const cvLink = process.env.NEXT_PUBLIC_CV_LINK;

  return (
    <section
      className={`min-h-screen flex flex-col items-center justify-center gap-8 transition-colors duration-500 ${themeClass} ${className}`}
    >
      {/* Блок: Profile */}
      <div className="w-full max-w-[700px] bg-[#f2f2f2] dark:bg-[#2a2a2a] rounded-xl p-4 sm:p-6 md:p-8
  shadow-[0_10px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_40px_rgba(255,255,255,0.06)]
  transition-shadow duration-300 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4">

        
        {/* Аватар */}
        <div className="order-1 sm:order-2 w-28 h-28 sm:w-35 sm:h-35 rounded-full overflow-hidden  shrink-0 -mt-0 mx-auto sm:mx-0">
          <Image
            src="/images/face.jpg"
            alt="Аватар"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>
        
        {/* Текст */}
        <div className="order-2 sm:order-1 flex flex-col gap-3 text-center sm:text-left">
          <h1 className="text-6xl sm:text-4xl lg:text-5xl font-semibold">Hi, I'm Dmytro 👋</h1>
          <p className="text-xl sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300">
            Platform Software Engineer and Security Enthusiast focusing on Cloud and Security. Happy reading!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center sm:justify-start">
          <a
            href={cvLink}
            download
            target="_blank"
            rel="noopener noreferrer"
            >
            <button className="px-6 py-3 rounded-2xl bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
                Download CV
            </button>
            </a>
            <Link href="/contact">
            <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-6 py-3 rounded-2xl tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
                Contact me
            </button>
            </Link>
          </div>
        </div>

        
      </div>

      {/* Блок: About */}
      <div className="w-full max-w-[700px] bg-[#f2f2f2] dark:bg-[#2a2a2a] rounded-xl p-6 
  shadow-[0_10px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_40px_rgba(255,255,255,0.06)]">

        <h2 className="text-3xl sm:text-3xl font-semibold mb-2">About</h2>
        <div className="space-y-4">
        <p className="text-xl sm:text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
            I'm passionate about building software solutions and finding security vulnerabilities. 
            Currently I'm focused on secure software for cloud and platform teams.
        </p>
        <p className="text-xl sm:text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
        Specializing in Devops, Cloud, Kubernetes security and eBPF-based runtime protection.
            Delivered cost-optimized and hardened environments in gambling, gaming and cybersecurity sectors. 
            Skilled in Go, JS and Terraform.
            When I’m not debugging, I’m likely experimenting with drones or raspberry pi.
        </p>
        </div>
      </div>

      {/* Кнопка смены темы */}
      {/* <button
        onClick={toggleTheme}
        className="px-4 py-2 border rounded-md bg-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      >
        Сменить тему
      </button> */}
        <InfiniteLogoScroller/>
    </section>
    
  )
}
