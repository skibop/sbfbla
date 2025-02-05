'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const NavItem = ({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) => (
  <Link href={href} className={`text-white hover:text-yellow-400 transition-colors ${className}`}>
    {children}
  </Link>
)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      setIsClosing(true)
      const timer = setTimeout(() => setIsClosing(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  return (
    <nav className="fixed w-full z-10 bg-gray-900 bg-opacity-75">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="hidden md:flex items-center space-x-4">
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#about">About</NavItem>
            <NavItem href="#officers">Officers</NavItem>
            <NavItem href="#gallery">Gallery</NavItem>
            <NavItem href="#resources">Resources</NavItem>
            <a
              href="https://www.instagram.com/sb.fbla/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Instagram
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-400 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-blue-900 bg-opacity-95 shadow-md transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        } ${isClosing ? 'hidden' : ''}`}
      >
        <div className="flex flex-col px-4 py-2 space-y-2">
          {['Home', 'About', 'Officers', 'Gallery', 'Resources'].map((item) => (
            <NavItem key={item} href={`#${item.toLowerCase()}`} className="py-2 block w-full text-left">
              {item}
            </NavItem>
          ))}
          <a
            href="https://www.instagram.com/sb.fbla/"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 block w-full text-left text-white hover:text-yellow-400 transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </nav>
  )
}

