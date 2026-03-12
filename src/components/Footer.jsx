import logo from '../assets/ic_logo.png'
export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
                <img src={logo} alt="Logo Bimbel SPP" className="w-10 h-10 rounded-xl object-contain" />
              </div>
              <div>
                <div className="text-sm font-bold text-white leading-tight">Bimbel</div>
                <div className="text-xs text-blue-400 leading-tight">Sukses Pamong Praja</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Lembaga bimbingan belajar terpercaya untuk persiapan seleksi IPDN dan Sekolah Kedinasan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigasi</h3>
            <div className="space-y-2">
              {[
                { id: 'beranda', label: 'Beranda' },
                { id: 'mengapa-kami', label: 'Mengapa Kami' },
                { id: 'program', label: 'Program' },
                { id: 'galeri', label: 'Galeri' },
                { id: 'testimoni', label: 'Testimoni' },
                { id: 'tim', label: 'Tim Kami' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="block text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold mb-4">Program</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Persiapan IPDN</p>
              <p>Persiapan Sekolah Kedinasan</p>
              <p>Drilling Soal SKD</p>
              <p>Pembinaan Jasmani</p>
              <p>Online Class</p>
              <p>Offline Class</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hubungi Kami</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <a href="tel:+6288707032434" className="flex items-center gap-2 hover:text-white transition-colors">
                📞 +62 887-0703-2434 (Adam)
              </a>
              <a href="tel:+6288286397018" className="flex items-center gap-2 hover:text-white transition-colors">
                📞 +62 882-8639-7018 (Cindy)
              </a>
              <a href="https://wa.me/6288707032434" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                💬 WA Adam
              </a>
              <a href="https://wa.me/6288286397018" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                💬 WA Cindy
              </a>
              <a href="mailto:suksespamongp@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                📧 suksespamongp@gmail.com
              </a>
              <a href="https://instagram.com/bimbelspp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg> @bimbelspp
              </a>
              <p className="flex items-start gap-2">
                📍 Jl. Sukawening No. 16, Kel. Hegarmanah, Kec. Jatinangor, Sumedang, Jawa Barat 45363
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Bimbel Sukses Pamong Praja. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
