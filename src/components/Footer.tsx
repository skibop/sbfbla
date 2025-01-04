import { Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-blue-400 hover:text-blue-300 transition-colors">
              Back to Top
            </a>
          </div>
          <div className="flex items-center mb-4 md:mb-0">
            <a
              href="https://www.instagram.com/sb.fbla/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Instagram className="mr-2" />
              Follow Us on Instagram
            </a>
          </div>
          <div>
            <p>&copy; 2025 South Brunswick FBLA. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

