import Header from '@/components/Header'
import MainPage from '@/components/MainPage'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Header />
      <MainPage />
    </main>
  )
}
