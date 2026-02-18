import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌐</span>
              <span className="text-xl font-bold text-white">InfoNusantara</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Portal informasi terlengkap seputar teknologi, kesehatan, pendidikan, lingkungan, sains, budaya, dan wisata Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigasi</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { path: '/', label: 'Beranda' },
                { path: '/tentang', label: 'Tentang' },
                { path: '/teknologi', label: 'Teknologi' },
                { path: '/kesehatan', label: 'Kesehatan' },
                { path: '/pendidikan', label: 'Pendidikan' },
                { path: '/lingkungan', label: 'Lingkungan' },
                { path: '/sains', label: 'Sains' },
                { path: '/budaya', label: 'Budaya' },
                { path: '/wisata', label: 'Wisata' },
                { path: '/kontak', label: 'Kontak' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hubungi Kami</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📧 info@infonusantara.id</p>
              <p>📞 +62 21 1234 5678</p>
              <p>📍 Jakarta, Indonesia</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} InfoNusantara. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
