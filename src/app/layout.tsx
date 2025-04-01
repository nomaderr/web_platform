// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

import './globals.css'
import { Work_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
})

export const metadata = {
  title: 'Мой сайт',
  description: 'Портфолио, блог и всё остальное',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={workSans.variable}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



// import { ThemeProvider } from '@/components/theme-provider'

// export default function RootLayout({ children }) {
//   return (
//     <html lang="ru" suppressHydrationWarning>
//       <body>
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }
