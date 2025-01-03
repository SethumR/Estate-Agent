import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">LuxuryEstates</Link>
          <div className="hidden md:flex space-x-10">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/" className="text-gray-600 hover:text-blue-600">Properties</Link>
            <Link to="/" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link to="/" className="text-gray-600 hover:text-blue-600">Contact</Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <Link to="/" className="block py-2 text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/" className="block py-2 text-gray-600 hover:text-blue-600">Properties</Link>
            <Link to="/about" className="block py-2 text-gray-600 hover:text-blue-600">About</Link>
            <Link to="/contact" className="block py-2 text-gray-600 hover:text-blue-600">Contact</Link>
          </div>
        )}
      </div>
    </header>
  )
}
