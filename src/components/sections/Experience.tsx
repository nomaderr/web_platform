'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'


import Image from 'next/image'



interface TestProps {
  className?: string
}


const cards = [
  {
    year: '2022 - 2025',
    position: 'Evoplay - Senior DevOps / DevSecOps Engineer',
    desc: 
    'Developed and supported a secure cloud platform on AWS for gaming services. Created reusable Terraform modules and Helm templates for multi-team infrastructure. Automated CI/CD, integrated OpenSearch and PagerDuty for incident management. Wrote Lambda functions in Node.js and microservices in Go for internal monitoring and alerting. Significantly reduced cloud costs by optimizing networks, disks, and instances.',
    avatar: '/svg/companies/evoplay.jpeg',
  },
  {
    year: '2021 – 2022',
    position: 'Cybereason - DevOps / DevSecOps Engineer',
    desc: 
    'Worked on the EDR/XDR platform in the GCP cloud. Deployed and supported dozens of Kubernetes clusters, implemented Helm charts and secret management via Vault. Configured Istio service mesh, CI/CD pipelines and monitoring systems with Prometheus and Grafana. Focus — security and fault tolerance of infrastructure for endpoint protection systems.',
    avatar: '/svg/companies/cybereason.D.svg',
  },
  {
    year: '2019 – 2021',
    position: 'Whaleapp - Platform Engineer / DevOps Engineer',
    desc: 
    'Created internal platform tools and network management for the game server infrastructure. Developed a Node.js web application for network management on MikroTik, implemented HAProxy and Keepalived. Set up monitoring (Grafana, Prometheus, Graylog) and strengthened security with RBAC, firewall and Vault. Deployed a Kubernetes environment and automated the Dev environment with Ansible and Jenkins.',
    avatar: '/svg/companies/whale.svg',
  },
]

export function Experience({ className = '' }: TestProps) {
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
    
  className={`flex flex-col items-center justify-start p-4 min-h-screen transition-colors duration-500 ${themeClass} ${className}`}

>
  {/* Заголовок */}
  <div className="mb-8 text-center max-w-[700px] w-full">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white tracking-wide">
            Experience
          </h2>
          {/* Подчеркивание */}
          <div className="h-[2px] w-20 bg-gray-400 dark:bg-gray-500 mx-auto my-2 rounded-full" />
          {/* Описание */}
          <p className="text-gray-700 dark:text-gray-300 text-base max-w-xl mx-auto">
          My last 3 jobs are listed here.
          </p>
    </div>

  {/* Контейнер */}
  <div className="w-full max-w-[700px] bg-white dark:bg-neutral-900 rounded-xl 
shadow-[0_6px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_6px_24px_rgba(255,255,255,0.04)] 
border border-white/40 dark:border-white/10 overflow-hidden transition-shadow duration-300">
     
  {cards.map((card, index) => (
  <div
    key={index}
    className="relative flex items-center gap-6 px-4 py-6 pl-24 
bg-[#f2f2f2] dark:bg-[#2a2a2a] 
shadow-[0_2px_10px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_12px_rgba(255,255,255,0.02)] 
transition-shadow duration-200"
  >
    {/* Аватар */}
    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full overflow-hidden border-2 border-white dark:border-neutral-800 shadow-md bg-white dark:bg-neutral-900 z-10">
      <Image
        src={card.avatar}
        alt="Avatar"
        width={64}
        height={64}
        className="object-cover w-full h-full"
      />
    </div>

    {/* 👉 Вертикальная пунктирная линия */}
    <div className="absolute left-[46px] top-0 bottom-0 w-0.5 border-l-2 border-dashed border-gray-300 dark:border-gray-600 z-0" />

    {/* Текст */}
    <div className="flex flex-col justify-center text-gray-800 dark:text-gray-200">
      <span className="text-lg font-semibold leading-tight">{card.year}</span>
      {card.position && (
        <span className="text-base leading-tight">{card.position}</span>
      )}
      <span className="text-sm text-gray-600 dark:text-gray-400 leading-snug">
        {card.desc}
      </span>
    </div>

    {/* Горизонтальная линия под карточкой */}
    {index < cards.length - 1 && (
      <div className="absolute bottom-0 left-24 right-4 border-t border-dashed border-gray-300 dark:border-gray-600" />
    )}
  </div>
))}

  </div>
</section>
  )
}
