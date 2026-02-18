const stats = [
  { number: '270 Juta', label: 'Penduduk Indonesia', icon: '👥' },
  { number: '68 Juta', label: 'Siswa Aktif', icon: '🎒' },
  { number: '4.6 Juta', label: 'Guru & Dosen', icon: '👨‍🏫' },
  { number: '300K+', label: 'Sekolah & Kampus', icon: '🏫' },
]

const topics = [
  {
    title: 'Kurikulum Merdeka: Transformasi Pendidikan Indonesia',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    desc: 'Kurikulum Merdeka memberikan kebebasan kepada sekolah dan guru untuk mengembangkan pembelajaran yang sesuai dengan kebutuhan dan konteks lokal. Dengan pendekatan berbasis proyek dan kompetensi, siswa didorong untuk berpikir kritis, kreatif, dan kolaboratif. Transformasi ini bertujuan menciptakan lulusan yang siap menghadapi tantangan abad ke-21.',
  },
  {
    title: 'Pendidikan Digital: E-Learning dan Masa Depannya',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
    desc: 'Pandemi telah mempercepat adopsi teknologi dalam pendidikan. Platform e-learning, video conference, dan aplikasi edutech telah menjadi bagian integral dari proses belajar mengajar. Dengan akses internet yang semakin luas, pendidikan digital membuka peluang belajar yang setara bagi seluruh anak Indonesia.',
  },
  {
    title: 'STEM Education: Membangun Generasi Inovator',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
    desc: 'Pendidikan STEM (Science, Technology, Engineering, Mathematics) menjadi kunci daya saing bangsa. Melalui pembelajaran berbasis eksperimen dan proyek nyata, siswa belajar memecahkan masalah kompleks. Indonesia membutuhkan lebih banyak talenta STEM untuk mendorong inovasi dan pertumbuhan ekonomi.',
  },
  {
    title: 'Pendidikan Inklusif: Hak Belajar untuk Semua',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
    desc: 'Setiap anak berhak mendapatkan pendidikan berkualitas tanpa memandang latar belakang, kemampuan, atau kondisi fisik. Pendidikan inklusif memastikan bahwa semua anak, termasuk anak berkebutuhan khusus, mendapat kesempatan belajar yang sama dengan dukungan dan fasilitas yang memadai.',
  },
]

export default function Education() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-amber-500 to-orange-600 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&q=80')] bg-cover bg-center opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pendidikan</h1>
          <p className="text-lg text-amber-100 max-w-2xl leading-relaxed">
            Pendidikan adalah investasi terbaik untuk masa depan. Jelajahi informasi seputar dunia
            pendidikan Indonesia dan global, dari kebijakan hingga inovasi pembelajaran.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-amber-600">{stat.number}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Topik Pendidikan</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Berbagai isu pendidikan yang sedang menjadi perhatian dan membentuk masa depan pembelajaran di Indonesia.
          </p>
        </div>
        <div className="space-y-12">
          {topics.map((topic, index) => (
            <div
              key={topic.title}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:direction-rtl' : ''}`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <img src={topic.image} alt={topic.title} className="w-full h-72 object-cover rounded-2xl shadow-md" />
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{topic.title}</h3>
                <p className="text-gray-600 leading-relaxed">{topic.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="text-5xl mb-6">📚</div>
          <blockquote className="text-2xl md:text-3xl font-semibold text-gray-800 italic leading-relaxed mb-6">
            "Pendidikan adalah senjata paling ampuh yang dapat kamu gunakan untuk mengubah dunia."
          </blockquote>
          <cite className="text-gray-500 text-lg">— Nelson Mandela</cite>
        </div>
      </section>
    </div>
  )
}
