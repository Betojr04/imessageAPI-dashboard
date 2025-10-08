import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SMS AI Assistant - Business Dashboard',
  description: 'AI-powered SMS assistant for small businesses. Automate customer service via text message.',
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
