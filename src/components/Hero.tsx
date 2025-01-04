import Image from 'next/image'

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-blue-700">
      <Image
        src="/Images/IMG_1270.jpg"
        alt="FBLA Hero Image"
        layout="fill"
        objectFit="cover"
        // className="z-0 opacity-50"
      />
      <div className="z-10 text-center text-white mt-[-400px]">
        <h1 className="text-5xl md:text-7xl font-bold mb-2 text-yellow-400">SOUTH BRUNSWICK</h1>
        <h2 className="text-3xl md:text-5xl font-semibold">FUTURE BUSINESS LEADERS OF AMERICA</h2>
      </div>
    </div>
  )
}

