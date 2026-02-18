const tips = [
  {
    icon: '🥗',
    title: 'Nutrisi Seimbang',
    desc: 'Konsumsi makanan dengan gizi seimbang: karbohidrat, protein, lemak sehat, vitamin, dan mineral. Perbanyak sayur dan buah-buahan segar setiap hari.',
  },
  {
    icon: '🏃',
    title: 'Olahraga Rutin',
    desc: 'Lakukan aktivitas fisik minimal 30 menit sehari, 5 kali seminggu. Olahraga teratur membantu menjaga berat badan ideal dan kesehatan jantung.',
  },
  {
    icon: '😴',
    title: 'Tidur Berkualitas',
    desc: 'Tidur 7-9 jam per malam sangat penting untuk pemulihan tubuh. Buat rutinitas tidur yang konsisten dan hindari gadget sebelum tidur.',
  },
  {
    icon: '💧',
    title: 'Hidrasi Cukup',
    desc: 'Minum minimal 8 gelas air putih per hari. Hidrasi yang cukup membantu fungsi organ tubuh dan menjaga konsentrasi.',
  },
  {
    icon: '🧘',
    title: 'Kesehatan Mental',
    desc: 'Kelola stres dengan meditasi, yoga, atau hobi yang menyenangkan. Jangan ragu untuk berkonsultasi dengan profesional jika diperlukan.',
  },
  {
    icon: '🏥',
    title: 'Pemeriksaan Rutin',
    desc: 'Lakukan check-up kesehatan secara berkala minimal setahun sekali untuk deteksi dini penyakit dan menjaga kondisi tubuh.',
  },
]

const articles = [
  {
    title: 'Panduan Lengkap Diet Mediterania untuk Kesehatan Jantung',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
    date: '14 Februari 2026',
    excerpt:
      'Diet Mediterania dikenal sebagai salah satu pola makan paling sehat di dunia. Berbasis pada konsumsi sayuran, buah-buahan, biji-bijian, minyak zaitun, dan ikan, diet ini telah terbukti secara ilmiah mampu mengurangi risiko penyakit jantung hingga 30%.',
  },
  {
    title: 'Manfaat Meditasi untuk Kesehatan Mental dan Fisik',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
    date: '11 Februari 2026',
    excerpt:
      'Meditasi bukan sekadar tren, tapi praktik yang telah dibuktikan secara ilmiah memberikan manfaat luar biasa. Dari mengurangi kecemasan, meningkatkan fokus, hingga menurunkan tekanan darah, meditasi adalah investasi terbaik untuk kesehatan Anda.',
  },
  {
    title: 'Pentingnya Vaksinasi: Fakta dan Mitos yang Perlu Diketahui',
    image: 'https://images.unsplash.com/photo-1615631648086-325025c9e51e?w=800&q=80',
    date: '8 Februari 2026',
    excerpt:
      'Vaksinasi adalah salah satu pencapaian terbesar dalam dunia kesehatan. Artikel ini membahas fakta ilmiah tentang vaksin, membedah mitos yang beredar, dan menjelaskan mengapa imunisasi penting untuk kesehatan individu dan komunitas.',
  },
]

export default function Health() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-rose-500 to-pink-700 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80')] bg-cover bg-center opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Kesehatan</h1>
          <p className="text-lg text-rose-100 max-w-2xl leading-relaxed">
            Informasi kesehatan terpercaya untuk membantu Anda menjalani hidup yang lebih sehat dan bahagia.
            Tips, panduan, dan artikel kesehatan berbasis bukti ilmiah.
          </p>
        </div>
      </section>

      {/* Health Tips */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Tips Hidup Sehat</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Enam kebiasaan sederhana yang dapat mengubah kualitas hidup Anda secara signifikan.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">{tip.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{tip.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Artikel Kesehatan</h2>
          <div className="space-y-8">
            {articles.map((article) => (
              <div
                key={article.title}
                className="grid md:grid-cols-3 gap-6 bg-gray-50 rounded-2xl overflow-hidden hover:bg-rose-50 transition-colors"
              >
                <img src={article.image} alt={article.title} className="w-full h-56 md:h-full object-cover" />
                <div className="md:col-span-2 p-6 flex flex-col justify-center">
                  <span className="text-sm text-rose-500 font-medium mb-2">{article.date}</span>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{article.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{article.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
