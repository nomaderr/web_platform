'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'


import Image from 'next/image'
import { IconGrid } from "@/components/sections/Skills";

import { GitHubCards } from "@/components/sections/Projects";


interface TestProps {
  className?: string
}

IconGrid

const cards = [
  {
    year: '2025',
    desc: 'AWS Certified Cloud Practitioner, Validation: 1ceeb153167f4909a9133e72c5cfd64d',
    avatar: '/images/a2.png',
    url: "https://cp.certmetrics.com/amazon/en/public/verify/credential",
  },
  {
    year: '2022',
    desc: 'Architecting with Google Kubernetes Engine: Foundations',
    avatar: '/images/g2.png',
    url: "https://www.coursera.org/account/accomplishments/certificate/YDRN8LSBG9EC",
  },
  {
    year: '2020',
    desc: 'Essential Cloud Infrastructure: Foundation',
    avatar: '/images/g2.png',
    url: "https://www.coursera.org/account/accomplishments/verify/S8NY4NCD69MC?utm_campaign=copybutton_certificate&utm_medium=certificate&utm_source=link",
  },
  {
    year: '2020',
    desc: 'Google Cloud Platform Fundamentals: Core Infrastructure',
    avatar: '/images/g2.png',
    url: "https://www.coursera.org/account/accomplishments/certificate/9E2FL6LN4V8M",
  },
  {
    year: '2010 - 2015',
    university: 'National Aviation University',
    desc: 'Specialist degree in telecommunication systems and networks in aviation',
    avatar: '/images/nau.png',
    url: "https://nau.edu.ua/en/",
  },
]

export function Test({ className = '' }: TestProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const themeClass =
    theme === 'dark' ? 'bg-[#1C1C1E] text-white' : 'bg-white text-black'

  return (
    <section
    
  className={`flex flex-col items-center justify-center p-4 min-h-screen transition-colors duration-500 ${themeClass} ${className}`}

>
<IconGrid/>
  {/* Заголовок */}
  <div className="mt-ц2 md:mt-16text-center mb-6">
    <h2 className="text-3xl font-bold text-gray-800 dark:text-white tracking-wide">
      Certificates & Education
    </h2>
    <div className="mt-2 w-32 mx-auto border-t-2 border-gray-400 dark:border-gray-600" />
  </div>

  {/* Контейнер */}
  <div className="w-full max-w-[700px] rounded-xl 
  bg-white dark:bg-neutral-900 
  shadow-[0_10px_40px_rgba(0,0,0,0.15)] 
  dark:shadow-[0_10px_40px_rgba(255,255,255,0.06)] 
  border border-white/60 dark:border-white/10 
  overflow-hidden transition-shadow duration-300">
    {cards.map((card, index) => (
      <div
        key={index}
        className="relative flex items-center gap-6 px-4 py-6 pl-24 bg-[#f2f2f2] dark:bg-[#2a2a2a]"
      >
         {/* Вертикальная пунктирная линия */}
        <div className="absolute left-[46px] top-0 bottom-0 w-0.5 border-l-2 border-dashed border-gray-300 dark:border-gray-600 z-0" />

        {/* Аватар */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full overflow-hidden border-2 border-white dark:border-neutral-800 shadow-md bg-white dark:bg-neutral-900">
          <Image
            src={card.avatar}
            alt="Avatar"
            width={64}
            height={64}
            className="object-cover w-full h-full"
          />
        </div>
       
        

        {/* Текст */}
        <div className="flex flex-col justify-center text-gray-800 dark:text-gray-200">
          <span className="text-lg font-semibold leading-tight">{card.year}</span>
          {card.university && (
            <span className="text-base leading-tight">{card.university}</span>
          )}
          <span className="text-sm text-gray-600 dark:text-gray-400 leading-snug">
            {card.desc}
          </span>
          <a
            href={card.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-[inset_0_0_0_2px_#616467] text-black mt-3 w-max text-xs px-4 py-1 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200"
          >
            Verify
          </a>
        </div>

        {/* Пунктирная линия */}
        {index < cards.length - 1 && (
          <div className="absolute bottom-0 left-24 right-4 border-t border-dashed border-gray-300 dark:border-gray-600" />
        )}
      </div>
    ))}
  </div>
 <GitHubCards/>
</section>
  )
}
