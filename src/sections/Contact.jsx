const contactData = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Telepon / CP',
    value: '+62 812-3456-7890',
    href: 'tel:+6281234567890',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.612l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.368 0-4.584-.818-6.34-2.186l-.442-.353-3.088 1.035 1.035-3.088-.353-.442A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
      </svg>
    ),
    label: 'WhatsApp',
    value: '+62 812-3456-7890',
    href: 'https://wa.me/6281234567890',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'info@bimbelspp.com',
    href: 'mailto:info@bimbelspp.com',
    color: 'bg-red-100 text-red-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    label: 'Instagram',
    value: '@bimbelspp_official',
    href: 'https://instagram.com/bimbelspp_official',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Lokasi',
    value: 'Jl. Pamong Praja No. 45, Jatinangor, Sumedang, Jawa Barat 45363',
    href: 'https://maps.google.com/?q=Jatinangor+Sumedang',
    color: 'bg-amber-100 text-amber-600',
  },
]

export default function Contact() {
  return (
    <section id="kontak" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Kontak</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            Profil & Kontak Kami
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Jangan ragu untuk menghubungi kami. Tim Bimbel SPP siap membantu menjawab pertanyaan Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Profile */}
          <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">
              SPP
            </div>
            <h3 className="text-2xl font-bold mb-2">Bimbel Sukses Pamong Praja</h3>
            <p className="text-blue-200 text-sm mb-6">
              Lembaga bimbingan belajar terpercaya untuk persiapan seleksi IPDN dan
              Sekolah Kedinasan sejak 2014.
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span>📅</span>
                <span className="text-blue-200">Berdiri sejak 2014</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🎓</span>
                <span className="text-blue-200">2.500+ Alumni Lolos Seleksi</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📊</span>
                <span className="text-blue-200">Tingkat Kelulusan 95%</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🏢</span>
                <span className="text-blue-200">Izin Resmi Diknas</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-sm text-blue-200 mb-4">Jam Operasional:</p>
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span className="text-blue-200">Senin - Jumat</span>
                  <span className="font-medium">08:00 - 21:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Sabtu</span>
                  <span className="font-medium">08:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Minggu</span>
                  <span className="font-medium">09:00 - 15:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {contactData.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all border border-gray-100 group"
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-gray-400 font-medium">{item.label}</div>
                    <div className="text-gray-800 font-semibold group-hover:text-blue-600 transition-colors truncate">
                      {item.value}
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-blue-500 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-6 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl mb-2">📍</div>
                  <p className="text-gray-500 text-sm font-medium">Jl. Pamong Praja No. 45, Jatinangor</p>
                  <a
                    href="https://maps.google.com/?q=Jatinangor+Sumedang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm font-medium hover:underline mt-1 inline-block"
                  >
                    Buka di Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
