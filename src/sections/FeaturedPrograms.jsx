const programs = [
  {
    icon: '📖',
    title: 'Akademik',
    items: [
      'Matematika / Penalaran Numerik',
      'Pengetahuan Umum',
      'Wawasan Kebangsaan',
      'Bahasa Indonesia',
      'Bahasa Inggris',
    ],
    color: 'blue',
  },
  {
    icon: '🧠',
    title: 'Psikologi',
    items: [
      'Kecerdasan',
      'Kepribadian',
      'Kecermatan',
    ],
    color: 'purple',
  },
  {
    icon: '🏋️',
    title: 'Jasmani',
    items: [
      'Samapta A',
      'Samapta B',
    ],
    color: 'red',
  },
  {
    icon: '🏥',
    title: 'Kesehatan',
    items: [
      'Medical Check Up',
      'Postur',
      'Terapi Tinggi',
      'Perbaikan Kesehatan',
    ],
    color: 'emerald',
  },
  {
    icon: '🛡️',
    title: 'Mental Ideologi / PMK',
    items: [
      'Tertulis',
      'Wawancara',
    ],
    color: 'amber',
  },
]

const colorMap = {
  blue: 'bg-blue-500',
  purple: 'bg-purple-500',
  red: 'bg-red-500',
  emerald: 'bg-emerald-500',
  amber: 'bg-amber-500',
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
            Materi lengkap yang dirancang khusus untuk memaksimalkan peluang kelulusan di setiap tahapan seleksi.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-7 border border-white/10 hover:bg-white/15 transition-all hover:shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-12 h-12 ${colorMap[program.color]} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold">{program.title}</h3>
              </div>
              <ul className="space-y-3">
                {program.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-yellow-400/20 text-yellow-400 rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>
                    <span className="text-blue-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
