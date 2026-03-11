import { useState, useEffect, useRef } from 'react'
import logo from '../assets/ic_logo.png'

const navLinks = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'mengapa-kami', label: 'Mengapa Kami' },
  { id: 'program', label: 'Program' },
  { id: 'galeri', label: 'Galeri' },
  { id: 'testimoni', label: 'Testimoni' },
  { id: 'tim', label: 'Tim Kami' },
  { id: 'kontak', label: 'Kontak' },
]

function WhatsAppDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="ml-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors flex items-center gap-1"
      >
        💬 WhatsApp
        <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
          <a
            href="https://wa.me/6288707032434"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 transition-colors"
          >
            <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">💬</span>
            <div>
              <div className="text-sm font-semibold text-gray-800">Adam</div>
              <div className="text-xs text-gray-400">+62 887-0703-2434</div>
            </div>
          </a>
          <a
            href="https://wa.me/6288286397018"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 transition-colors border-t border-gray-50"
          >
            <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">💬</span>
            <div>
              <div className="text-sm font-semibold text-gray-800">Cindy</div>
              <div className="text-xs text-gray-400">+62 882-8639-7018</div>
            </div>
          </a>
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileWa, setMobileWa] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    setIsOpen(false)
    setMobileWa(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <button onClick={() => scrollTo('beranda')} className="flex items-center gap-2">
            <img src={logo} alt="Logo Bimbel SPP" className="w-10 h-10 rounded-xl object-contain" />
            <div className="hidden sm:block">
              <div className={`text-sm font-bold leading-tight text-left ${scrolled ? 'text-gray-800' : 'text-white'}`}>Bimbel</div>
              <div className={`text-xs font-bold leading-tight text-left ${scrolled ? 'text-blue-800' : 'text-white'}`}>Sukses Pamong Praja</div>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${scrolled ? 'text-gray-600 hover:bg-blue-50 hover:text-blue-600' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
              >
                {link.label}
              </button>
            ))}
            <WhatsAppDropdown />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden pb-4 bg-white rounded-2xl shadow-xl mt-2 p-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}

              {/* Mobile WA Dropdown */}
              <button
                onClick={() => setMobileWa(!mobileWa)}
                className="mt-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors text-center flex items-center justify-center gap-1"
              >
                💬 WhatsApp
                <svg className={`w-4 h-4 transition-transform ${mobileWa ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileWa && (
                <div className="mt-1 bg-green-50 rounded-xl overflow-hidden">
                  <a
                    href="https://wa.me/6288707032434"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-green-100 transition-colors"
                  >
                    <span>💬</span>
                    <div>
                      <div className="text-sm font-semibold text-gray-800">Adam</div>
                      <div className="text-xs text-gray-500">+62 887-0703-2434</div>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/6288286397018"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-green-100 transition-colors border-t border-green-100"
                  >
                    <span>💬</span>
                    <div>
                      <div className="text-sm font-semibold text-gray-800">Cindy</div>
                      <div className="text-xs text-gray-500">+62 882-8639-7018</div>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
