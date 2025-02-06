import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Officers from "@/components/Officers"
import AEP from "@/components/AEP"
import ImageGallery from "@/components/ImageGallery"
import Resources from "@/components/Resources"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <About />
      <Officers />
      <AEP />
      <ImageGallery />
      <Resources />
      <Footer />
    </main>
  )
}

