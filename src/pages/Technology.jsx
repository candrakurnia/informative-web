const articles = [
  {
    title: 'Artificial Intelligence: Revolusi Industri 4.0',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    category: 'AI & Machine Learning',
    date: '15 Februari 2026',
    excerpt:
      'Kecerdasan buatan telah mengubah cara kita bekerja, belajar, dan berinteraksi. Dari asisten virtual hingga mobil otonom, AI telah menjadi bagian tak terpisahkan dari kehidupan modern. Perkembangan model bahasa besar (LLM) dan generative AI membawa dampak transformatif di berbagai sektor industri.',
  },
  {
    title: 'Blockchain dan Masa Depan Keuangan Digital',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    category: 'Fintech',
    date: '12 Februari 2026',
    excerpt:
      'Teknologi blockchain tidak hanya tentang cryptocurrency. Dari supply chain management hingga smart contracts, blockchain menawarkan transparansi dan keamanan yang belum pernah ada sebelumnya dalam transaksi digital.',
  },
  {
    title: 'Internet of Things: Rumah Pintar di Era Digital',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
    category: 'IoT',
    date: '10 Februari 2026',
    excerpt:
      'IoT telah mengubah rumah biasa menjadi rumah pintar. Dengan perangkat yang saling terhubung, kita dapat mengontrol pencahayaan, suhu, keamanan, dan bahkan peralatan dapur hanya dari smartphone.',
  },
  {
    title: 'Cloud Computing: Infrastruktur Digital Masa Kini',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
    category: 'Cloud',
    date: '8 Februari 2026',
    excerpt:
      'Cloud computing telah merevolusi cara perusahaan mengelola data dan aplikasi. Dari startup hingga korporasi besar, layanan cloud menawarkan skalabilitas, efisiensi biaya, dan fleksibilitas yang tak tertandingi.',
  },
  {
    title: '5G dan Konektivitas Super Cepat',
    image: 'https://images.unsplash.com/photo-1562408590-e32931084e23?w=800&q=80',
    category: 'Telekomunikasi',
    date: '5 Februari 2026',
    excerpt:
      'Jaringan 5G menjanjikan kecepatan internet hingga 100 kali lebih cepat dari 4G. Teknologi ini akan membuka peluang baru dalam telemedicine, augmented reality, dan kota pintar (smart city).',
  },
  {
    title: 'Cybersecurity di Era Digital',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    category: 'Keamanan',
    date: '3 Februari 2026',
    excerpt:
      'Dengan meningkatnya ancaman siber, keamanan digital menjadi prioritas utama. Pelajari tentang tren terbaru dalam cybersecurity, dari zero-trust architecture hingga AI-powered threat detection.',
  },
]

export default function Technology() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-violet-600 to-purple-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80')] bg-cover bg-center opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Teknologi</h1>
          <p className="text-lg text-purple-100 max-w-2xl leading-relaxed">
            Ikuti perkembangan teknologi terkini yang membentuk masa depan. Dari AI hingga cybersecurity,
            temukan informasi terlengkap di sini.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
          <img
            src={articles[0].image}
            alt={articles[0].title}
            className="w-full h-72 md:h-full object-cover"
          />
          <div className="p-8">
            <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {articles[0].category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{articles[0].title}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{articles[0].excerpt}</p>
            <p className="text-sm text-gray-400">{articles[0].date}</p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Artikel Lainnya</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article) => (
            <article
              key={article.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{article.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-3">{article.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
