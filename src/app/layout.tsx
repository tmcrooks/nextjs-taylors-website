import type { Metadata } from 'next'
import './globals.css'
import { lusitana } from '@/ui/fonts'


export const metadata: Metadata = {
  title: {
    template: '%s | Taylor\'s Cleaning and Restoration',
    default: 'Home | Taylor\'s Cleaning and Restoration',
  },
  description: 'Triangle area residential and commercial restoration services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lusitana.className}>{children}</body>
    </html>
  )
}
