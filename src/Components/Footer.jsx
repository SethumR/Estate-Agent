import { FaFacebook, FaInstagram, FaGlobe, FaMapPin, FaPhone, FaEnvelope, FaArrowUp } from 'react-icons/fa'
import { Link } from "react-router-dom";  

export default function HomePage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-6 relative ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-12"> 
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-white text-2xl font-semibold">LuxuryEstates</h2>
            <p className="text-gray-400 leading-relaxed ">
            LuxuryEstates is a premier real estate company offering a curated selection of high-end residential, 
            commercial, and vacation properties. With a focus on quality and elegance, it provides an exclusive experience for clients seeking luxurious living spaces.
            </p>
            <div className="flex gap-4 ">
              <Link href="#" className="p-2 rounded-full border border-gray-700 hover:border-gray-500 transition-colors">
                <FaFacebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 rounded-full border border-gray-700 hover:border-gray-500 transition-colors">
                <FaInstagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 rounded-full border border-gray-700 hover:border-gray-500 transition-colors">
                <FaGlobe className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 ml-4 md:ml-80"> 
            <h2 className="text-white text-2xl font-semibold">Contact Info</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full border border-gray-700">
                  <FaMapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400">Address:</p>
                  <p>Colombo, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full border border-gray-700">
                  <FaPhone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400">Mobile:</p>
                  <p>+94 756413574</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">Copyright © 2025 LuxuryEstates </p>
        </div>
      </div>

      {/* Scroll to Top Button
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-blue-950 text-white rounded-full hover:bg-blue-900 transition-colors"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-6 h-6" />
      </button> */}
    </footer>
  )
}
