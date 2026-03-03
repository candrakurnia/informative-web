const onlinePrograms = [
  {
    name: 'Paket Online Reguler',
    duration: '3 Bulan',
    price: 'Rp 2.500.000',
    features: [
      'Live class via Zoom 3x seminggu',
      'Modul digital lengkap',
      'Try out online berkala',
      'Grup diskusi WhatsApp',
      'Rekaman kelas bisa diputar ulang',
    ],
  },
  {
    name: 'Paket Online Intensif',
    duration: '6 Bulan',
    price: 'Rp 4.500.000',
    popular: true,
    features: [
      'Live class via Zoom 5x seminggu',
      'Modul digital + bank soal 5.000+',
      'Try out online mingguan',
      'Mentoring personal 1-on-1',
      'Simulasi wawancara online',
      'Grup diskusi & konsultasi 24/7',
      'Akses video pembelajaran',
    ],
  },
  {
    name: 'Paket Online Kilat',
    duration: '1 Bulan',
    price: 'Rp 1.500.000',
    features: [
      'Live class via Zoom setiap hari',
      'Drilling soal intensif',
      'Try out harian',
      'Pembahasan soal mendalam',
      'Tips & trik mengerjakan soal',
    ],
  },
]

const offlinePrograms = [
  {
    name: 'Paket Offline Reguler',
    duration: '3 Bulan',
    price: 'Rp 5.000.000',
    features: [
      'Tatap muka 4x seminggu',
      'Modul cetak lengkap',
      'Try out di kelas setiap 2 minggu',
      'Pembinaan fisik 2x seminggu',
      'Ruang belajar ber-AC nyaman',
    ],
  },
  {
    name: 'Paket Offline Intensif',
    duration: '6 Bulan',
    price: 'Rp 9.000.000',
    popular: true,
    features: [
      'Tatap muka 6x seminggu',
      'Modul cetak + digital + bank soal',
      'Try out mingguan',
      'Pembinaan fisik 3x seminggu',
      'Bimbingan mental & wawancara',
      'Mentoring personal 1-on-1',
      'Laporan progress ke orang tua',
      'Konsultasi tanpa batas',
    ],
  },
  {
    name: 'Paket Offline Super Intensif',
    duration: '1 Tahun',
    price: 'Rp 15.000.000',
    features: [
      'Full program tatap muka',
      'Seluruh materi & modul lengkap',
      'Try out mingguan + try out akbar',
      'Pembinaan fisik & mental penuh',
      'Garansi mengulang jika belum lolos',
      'Bimbingan sampai diterima',
    ],
  },
]

function ProgramCard({ program }) {
  return (
    <div className={`relative bg-white rounded-2xl p-6 border-2 transition-all hover:shadow-xl ${program.popular ? 'border-blue-500 shadow-lg' : 'border-gray-100 shadow-sm'}`}>
      {program.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
          ⭐ PALING DIMINATI
        </div>
      )}
      <div className="text-center mb-6 pt-2">
        <h4 className="text-lg font-bold text-gray-900">{program.name}</h4>
        <div className="text-sm text-gray-400 mt-1">Durasi: {program.duration}</div>
        <div className="text-3xl font-extrabold text-blue-600 mt-3">{program.price}</div>
      </div>
      <ul className="space-y-3 mb-6">
        {program.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="https://wa.me/6281234567890?text=Halo%20Bimbel%20SPP,%20saya%20tertarik%20dengan%20program%20${encodeURIComponent(program.name)}"
        target="_blank"
        rel="noopener noreferrer"
        className={`block text-center font-semibold py-3 rounded-xl transition-colors ${program.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-blue-600 text-gray-700 hover:text-white'}`}
      >
        Daftar Sekarang
      </a>
    </div>
  )
}

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

        {/* Online Class */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">💻</div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Online Class</h3>
              <p className="text-gray-500 text-sm">Belajar dari mana saja, kapan saja</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {onlinePrograms.map((program) => (
              <ProgramCard key={program.name} program={program} />
            ))}
          </div>
        </div>

        {/* Offline Class */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-2xl">🏫</div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Offline Class</h3>
              <p className="text-gray-500 text-sm">Belajar langsung di lokasi bimbel</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {offlinePrograms.map((program) => (
              <ProgramCard key={program.name} program={program} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
