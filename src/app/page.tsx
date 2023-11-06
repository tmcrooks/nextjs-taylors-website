import Header from '@/ui/Header'
import MainPage from '@/ui/MainPage'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Header />
      <div className='p-6 text-center'>
        <div className='text-center'>
          <h3>Under Construction!</h3>
          <h5>Give us a call</h5>
          <p><a href="tel:9198336300">(919) 833-6300</a></p>
        </div>
        <div className='pt-6 mx-auto'>
        <Image
          src="/under-const.jpg"
          height={600}
          width={800}
          alt="Under construction"
        />
        </div>
      </div>

    </main>
  )
}
