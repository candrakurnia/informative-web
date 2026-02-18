import { Link } from 'react-router-dom'

const features = [
  {
    icon: '💻',
    title: 'Teknologi',
    desc: 'Perkembangan teknologi terkini yang mengubah dunia.',
    path: '/teknologi',
  },
  {
    icon: '🏥',
    title: 'Kesehatan',
    desc: 'Tips dan informasi gaya hidup sehat untuk semua.',
    path: '/kesehatan',
  },
  {
    icon: '🎓',
    title: 'Pendidikan',
    desc: 'Wawasan dunia pendidikan dan pembelajaran modern.',
    path: '/pendidikan',
  },
  {
    icon: '🌿',
    title: 'Lingkungan',
    desc: 'Upaya pelestarian alam dan keberlanjutan lingkungan.',
    path: '/lingkungan',
  },
  {
    icon: '🔬',
    title: 'Sains',
    desc: 'Penemuan ilmiah dan riset terbaru dari seluruh dunia.',
    path: '/sains',
  },
  {
    icon: '🎭',
    title: 'Budaya',
    desc: 'Kekayaan budaya dan tradisi Nusantara yang memukau.',
    path: '/budaya',
  },
  {
    icon: '✈️',
    title: 'Wisata',
    desc: 'Destinasi wisata terbaik di Indonesia dan mancanegara.',
    path: '/wisata',
  },
  {
    icon: '📬',
    title: 'Kontak',
    desc: 'Hubungi kami untuk pertanyaan dan kerjasama.',
    path: '/kontak',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Jelajahi Dunia <br />
              <span className="text-yellow-300">Pengetahuan & Informasi</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              InfoNusantara adalah portal informasi yang menyajikan artikel-artikel berkualitas seputar
              teknologi, kesehatan, pendidikan, lingkungan, sains, budaya, dan wisata. Temukan wawasan
              baru setiap hari!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/tentang"
                className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Tentang Kami
              </Link>
              <Link
                to="/kontak"
                className="inline-block border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Artikel' },
              { number: '50K+', label: 'Pembaca' },
              { number: '8', label: 'Kategori' },
              { number: '100+', label: 'Kontributor' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-blue-600">{stat.number}</div>
                <div className="text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Jelajahi Kategori</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Pilih topik yang menarik minat Anda dan mulailah membaca artikel-artikel informatif yang kami sajikan.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Link
              key={feature.title}
              to={feature.path}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500">{feature.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Memperluas Wawasan?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Mulailah menjelajahi berbagai artikel informatif kami. Dari teknologi hingga budaya, semua ada di sini.
          </p>
          <Link
            to="/teknologi"
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            Mulai Membaca
          </Link>
        </div>
      </section>
    </div>
  )
}
