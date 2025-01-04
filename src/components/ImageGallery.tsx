'use client'

import { useState } from 'react'
import Image from 'next/image'

const images = [
  { src: '/placeholder.svg?height=300&width=400', alt: 'FBLA Event 1' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'FBLA Event 2' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'FBLA Event 3' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'FBLA Event 4' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'FBLA Event 5' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'FBLA Event 6' },
]

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-fbla-blue">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-opacity hover:opacity-80"
              />
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full h-full flex items-center justify-center p-4">
            <Image
              src={selectedImage}
              alt="Selected image"
              layout="fill"
              objectFit="contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

