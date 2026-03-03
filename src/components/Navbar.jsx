import { useState, useEffect } from 'react'

const navLinks = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'mengapa-kami', label: 'Mengapa Kami' },
  { id: 'program', label: 'Program' },
  { id: 'galeri', label: 'Galeri' },
  { id: 'testimoni', label: 'Testimoni' },
  { id: 'tim', label: 'Tim Kami' },
  { id: 'kontak', label: 'Kontak' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    setIsOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <button onClick={() => scrollTo('beranda')} className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg ${scrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}>
              SPP
            </div>
            <div className="hidden sm:block">
              <div className={`text-sm font-bold leading-tight ${scrolled ? 'text-gray-800' : 'text-white'}`}>Bimbel Sukses</div>
              <div className={`text-xs leading-tight ${scrolled ? 'text-blue-600' : 'text-blue-200'}`}>Pamong Praja</div>
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
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
            >
              💬 WhatsApp
            </a>
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
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors text-center"
              >
                💬 Hubungi via WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
