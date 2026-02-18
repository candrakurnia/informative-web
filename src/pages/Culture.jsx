const cultures = [
  {
    title: 'Batik: Warisan Budaya Dunia',
    image: 'https://images.unsplash.com/photo-1584184924103-e310d9dc82fc?w=800&q=80',
    region: 'Jawa',
    desc: 'Batik telah diakui UNESCO sebagai Warisan Kemanusiaan untuk Budaya Lisan dan Nonbendawi sejak 2009. Setiap motif batik memiliki makna filosofis yang dalam, mencerminkan nilai-nilai kehidupan, alam, dan spiritualitas masyarakat Jawa. Dari batik tulis hingga batik cap, seni ini terus berkembang dan menjadi identitas bangsa Indonesia di mata dunia.',
  },
  {
    title: 'Wayang Kulit: Seni Pertunjukan Tradisional',
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?w=800&q=80',
    region: 'Jawa & Bali',
    desc: 'Wayang kulit adalah seni pertunjukan boneka bayangan yang telah ada selama lebih dari seribu tahun. Dalang sebagai pemain utama tidak hanya menggerakkan wayang, tetapi juga bercerita, menyanyikan tembang, dan menyampaikan nilai-nilai moral melalui cerita Ramayana dan Mahabharata.',
  },
  {
    title: 'Tari Saman: Harmoni Gerakan dan Syair',
    image: 'https://images.unsplash.com/photo-1545893835-abaa50cbe628?w=800&q=80',
    region: 'Aceh',
    desc: 'Tari Saman dari Gayo, Aceh, dikenal sebagai "Tari Seribu Tangan" karena gerakan para penarinya yang sangat kompak. Tarian ini memadukan tepukan tangan, gerakan badan, dan nyanyian syair dalam bahasa Gayo. UNESCO mengakuinya sebagai warisan budaya tak benda pada 2011.',
  },
  {
    title: 'Gamelan: Orkestra Tradisional Nusantara',
    image: 'https://images.unsplash.com/photo-1516450137517-162bfbeb8dba?w=800&q=80',
    region: 'Jawa & Bali',
    desc: 'Gamelan adalah ansambel musik tradisional yang menggunakan instrumen perkusi bernada seperti metalofon, gong, dan kendang. Musik gamelan memiliki sistem nada unik (pelog dan slendro) yang tidak ditemukan di tradisi musik lain. Gamelan telah menginspirasi komposer dunia seperti Claude Debussy.',
  },
]

const traditions = [
  { icon: '🎭', name: 'Reog Ponorogo', origin: 'Jawa Timur' },
  { icon: '🏮', name: 'Cap Go Meh', origin: 'Kalimantan Barat' },
  { icon: '🐂', name: 'Pacu Jawi', origin: 'Sumatera Barat' },
  { icon: '🪁', name: 'Festival Layang-Layang', origin: 'Bali' },
  { icon: '🎪', name: 'Karapan Sapi', origin: 'Madura' },
  { icon: '⚔️', name: 'Pasola', origin: 'NTT' },
  { icon: '🛶', name: 'Pesta Laut', origin: 'Pantai Utara Jawa' },
  { icon: '🏴', name: 'Tabuik', origin: 'Sumatera Barat' },
]

export default function Culture() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-red-700 to-rose-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558431382-27e303142255?w=1920&q=80')] bg-cover bg-center opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Budaya Indonesia</h1>
          <p className="text-lg text-rose-100 max-w-2xl leading-relaxed">
            Indonesia memiliki lebih dari 1.300 suku bangsa dengan kekayaan budaya yang luar biasa.
            Jelajahi keindahan tradisi, seni, dan adat istiadat Nusantara.
          </p>
        </div>
      </section>

      {/* Diversity Stats */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600">1,340</div>
              <div className="text-gray-500 text-sm mt-1">Suku Bangsa</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600">718</div>
              <div className="text-gray-500 text-sm mt-1">Bahasa Daerah</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600">13</div>
              <div className="text-gray-500 text-sm mt-1">Warisan UNESCO</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600">17,000+</div>
              <div className="text-gray-500 text-sm mt-1">Pulau</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Heritage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Warisan Budaya Nusantara</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Mengenal lebih dekat kekayaan seni dan budaya yang menjadi kebanggaan bangsa Indonesia.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {cultures.map((culture) => (
            <div
              key={culture.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100"
            >
              <img src={culture.image} alt={culture.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                    {culture.region}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{culture.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{culture.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Traditions */}
      <section className="bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Festival & Tradisi</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Berbagai festival dan tradisi unik dari berbagai daerah di Indonesia.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {traditions.map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{t.icon}</div>
                <h3 className="font-semibold text-gray-800 text-sm">{t.name}</h3>
                <p className="text-xs text-gray-400">{t.origin}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
