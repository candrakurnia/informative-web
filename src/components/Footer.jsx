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
                📸 @bimbelspp
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
