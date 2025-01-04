import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Officers from '@/components/Officers'
import Resources from '@/components/Resources'
import ImageGallery from '@/components/ImageGallery'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <About />
      <Officers />
      <ImageGallery />
      <Resources />
      <Footer />
    </main>
  )
}

