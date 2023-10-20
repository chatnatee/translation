import Image from 'next/image'
import Header from '@/app/component/Header'
import Forms from '@/app/component/Forms'
import Footer from '@/app/component/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>
      <Forms/>
      <Footer/>
    </main>
  )
}
