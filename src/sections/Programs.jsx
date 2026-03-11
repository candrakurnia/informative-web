const onlineFeatures = [
  'Belajar seluruh Materi SKD via Googlemeet',
  'Pembahasan materi dan soal setiap Senin – Kamis',
  'Free akses Simulasi CAT SKD',
]

const offlineFeatures = [
  'Belajar seluruh Materi SKD',
  'Free akses Simulasi CAT SKD',
  'Pelatihan bimbingan jasmani',
  'Bimbingan kelas Bahasa Inggris untuk TOEFL & IELTS',
  'Fasilitas belajar',
  'Fasilitas penginapan',
  'Kelas berisi 25 – 30 orang',
  'Makan 3x sehari',
]

export default function Programs() {
  return (
    <section id="program" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Program Bimbel</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            Pilih Program yang Tepat
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Tersedia kelas online dan offline dengan berbagai pilihan paket sesuai kebutuhan dan budget kamu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Online Class */}
          <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-100 hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-blue-200">
                💻
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Online Class</h3>
                <p className="text-gray-500 text-sm">Belajar dari mana saja, kapan saja</p>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {onlineFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/6288286397018?text=Halo%20Bimbel%20SPP,%20saya%20tertarik%20dengan%20program%20Online%20Class"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              Daftar Online Class
            </a>
          </div>

          {/* Offline Class */}
          <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border-2 border-amber-200 hover:shadow-xl transition-all">
            <div className="absolute -top-3 right-6 bg-amber-500 text-white text-xs font-bold px-4 py-1 rounded-full">
              ⭐ REKOMENDASI
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-amber-200">
                🏫
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Offline Class</h3>
                <p className="text-gray-500 text-sm">Belajar langsung di lokasi bimbel</p>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {offlineFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/6288286397018?text=Halo%20Bimbel%20SPP,%20saya%20tertarik%20dengan%20program%20Offline%20Class"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              Daftar Offline Class
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
