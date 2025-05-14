import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '송악고 체육대회',
  description: '송악고 체육대회 일정 및 대진표를 한눈에 확인할 수 있는 웹사이트 입니다',
  generator: 'yoomin1122',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
