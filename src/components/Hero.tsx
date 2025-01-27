import Image from 'next/image'

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-blue-700">
      {/* Background Image */}
      <Image
        src="/Images/IMG_1270.jpg"
        alt="FBLA Hero Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      {/* Gray Overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-70 z-0"></div>
      {/* Text Content */}
      <div className="z-10 text-center text-white mt-[-50px]">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white">SOUTH BRUNSWICK</h1>
        <h2 className="text-3xl md:text-5xl font-bold text-white">FUTURE BUSINESS LEADERS OF AMERICA</h2>
      </div>
    </div>
  )
}
