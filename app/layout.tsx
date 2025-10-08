import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'iMessage AI Dashboard',
  description: 'Manage your AI-powered iMessage assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
