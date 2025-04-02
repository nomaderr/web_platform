

// import './globals.css'
// import { Work_Sans } from 'next/font/google'
// import { ThemeProvider } from '@/components/theme-provider'

// const workSans = Work_Sans({
//   subsets: ['latin'],
//   variable: '--font-work-sans',
//   display: 'swap',
// })

// export const metadata = {
//   title: 'nomaderr',
//   description: 'Personal website',
// }

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="ru" suppressHydrationWarning>
//       <body className={workSans.variable}>
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }


// src/app/layout.tsx
// src/app/layout.tsx
import './globals.css'
import { Work_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeScript } from '../components/theme-script'

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
})

export const metadata = {
  title: 'nomaderr',
  description: 'Personal website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={workSans.variable}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
