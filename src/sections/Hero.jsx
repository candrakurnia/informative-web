export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="beranda" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80')] bg-cover bg-center opacity-15"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-blue-900/50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-yellow-400/20 text-yellow-300 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-yellow-400/30">
              🎓 #1 Bimbel Persiapan IPDN & Sekolah Kedinasan
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Bimbel Sukses <br />
              <span className="text-yellow-400">Pamong Praja</span>
            </h1>
            <p className="text-lg text-blue-200 leading-relaxed mb-8 max-w-lg">
              Wujudkan impian menjadi abdi negara melalui IPDN dan Sekolah Kedinasan.
              Bersama SPP, ribuan alumni telah berhasil meraih cita-cita mereka. Kini giliran kamu!
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('program')}
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-4 rounded-2xl transition-colors text-lg shadow-lg shadow-yellow-400/25"
              >
                Lihat Program
              </button>
              <a
                href="https://wa.me/6281234567890?text=Halo%20Bimbel%20SPP,%20saya%20ingin%20bertanya%20tentang%20program%20bimbel"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-2xl transition-colors text-lg"
              >
                Konsultasi Gratis
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 mt-12">
              {[
                { number: '2.500+', label: 'Alumni Lolos' },
                { number: '95%', label: 'Tingkat Kelulusan' },
                { number: '12+', label: 'Tahun Pengalaman' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400">{stat.number}</div>
                  <div className="text-sm text-blue-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-yellow-400/20 rounded-3xl blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80"
                alt="Siswa Bimbel SPP"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">✅</div>
                  <div>
                    <div className="text-sm font-bold text-gray-800">Terbukti Lolos!</div>
                    <div className="text-xs text-gray-500">2.500+ Alumni IPDN & Kedinasan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
