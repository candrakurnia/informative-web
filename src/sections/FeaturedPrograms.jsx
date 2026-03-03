const programs = [
  {
    icon: '🎖️',
    title: 'Persiapan IPDN',
    desc: 'Program khusus persiapan seleksi Institut Pemerintahan Dalam Negeri. Mencakup SKD (TWK, TIU, TKP), seleksi kesehatan, jasmani, dan wawancara.',
    highlights: ['SKD (CAT BKN)', 'Tes Kesehatan', 'Tes Jasmani', 'Wawancara Panel'],
    color: 'blue',
  },
  {
    icon: '⚔️',
    title: 'Persiapan Sekolah Kedinasan',
    desc: 'Program persiapan untuk berbagai Sekolah Kedinasan: STIS, STAN, STMKG, STIN, STIP, Poltekip/Poltekim, dan lainnya.',
    highlights: ['STIS / BPS', 'PKN STAN', 'STIN / BIN', 'Poltekip / Poltekim'],
    color: 'indigo',
  },
  {
    icon: '📝',
    title: 'Drilling Soal SKD',
    desc: 'Program drilling soal SKD intensif dengan ribuan bank soal terbaru. Fokus pada peningkatan skor TWK, TIU, dan TKP agar melewati passing grade.',
    highlights: ['5.000+ Bank Soal', 'Passing Grade Strategy', 'Pembahasan Detail', 'Simulasi CAT'],
    color: 'emerald',
  },
  {
    icon: '🏋️',
    title: 'Pembinaan Jasmani',
    desc: 'Program pembinaan fisik khusus untuk persiapan tes jasmani seleksi IPDN dan Sekolah Kedinasan. Dilatih oleh instruktur profesional.',
    highlights: ['Lari 12 Menit', 'Pull Up & Push Up', 'Shuttle Run', 'Renang'],
    color: 'red',
  },
]

const colorMap = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', badge: 'bg-blue-100 text-blue-700' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', badge: 'bg-indigo-100 text-indigo-700' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', badge: 'bg-emerald-100 text-emerald-700' },
  red: { bg: 'bg-red-50', text: 'text-red-600', badge: 'bg-red-100 text-red-700' },
}

export default function FeaturedPrograms() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-950 to-indigo-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Unggulan</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">
            Program Unggulan
          </h2>
          <p className="text-blue-300 max-w-2xl mx-auto text-lg">
            Program-program spesial yang dirancang khusus untuk memaksimalkan peluang kelulusan kamu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program) => {
            const colors = colorMap[program.color]
            return (
              <div
                key={program.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-all hover:shadow-2xl"
              >
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                <p className="text-blue-200 leading-relaxed mb-6">{program.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {program.highlights.map((h) => (
                    <span
                      key={h}
                      className={`text-xs font-medium px-3 py-1 rounded-full ${colors.badge}`}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/6281234567890?text=Halo%20Bimbel%20SPP,%20saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20program%20unggulan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-4 rounded-2xl transition-colors text-lg shadow-lg shadow-yellow-400/20"
          >
            Konsultasi Program Terbaik Untukmu
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
