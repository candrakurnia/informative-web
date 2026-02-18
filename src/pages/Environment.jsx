const issues = [
  {
    title: 'Perubahan Iklim',
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80',
    desc: 'Suhu global telah meningkat 1.1°C sejak era pra-industri. Pemanasan global menyebabkan pencairan es kutub, kenaikan permukaan laut, dan cuaca ekstrem yang semakin sering terjadi. Indonesia sebagai negara kepulauan sangat rentan terhadap dampak perubahan iklim.',
    stat: '1.1°C',
    statLabel: 'Kenaikan Suhu Global',
  },
  {
    title: 'Deforestasi',
    image: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80',
    desc: 'Indonesia memiliki hutan hujan tropis terbesar ketiga di dunia. Namun, deforestasi akibat perluasan perkebunan, penebangan liar, dan kebakaran hutan mengancam keanekaragaman hayati dan berkontribusi pada emisi gas rumah kaca.',
    stat: '9.2 Juta Ha',
    statLabel: 'Hutan Hilang (2001-2023)',
  },
  {
    title: 'Polusi Plastik',
    image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&q=80',
    desc: 'Setiap tahun, jutaan ton sampah plastik berakhir di lautan. Indonesia adalah kontributor sampah laut terbesar kedua di dunia. Gerakan mengurangi, menggunakan kembali, dan mendaur ulang plastik menjadi kunci penyelamatan ekosistem laut.',
    stat: '6.8 Juta Ton',
    statLabel: 'Sampah Plastik/Tahun',
  },
  {
    title: 'Konservasi Satwa',
    image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&q=80',
    desc: 'Indonesia adalah salah satu negara megabiodiversitas dengan ribuan spesies endemik. Orangutan, harimau Sumatera, badak Jawa, dan komodo adalah beberapa satwa ikonik yang terancam punah dan memerlukan perlindungan intensif.',
    stat: '1,200+',
    statLabel: 'Spesies Terancam',
  },
]

const actions = [
  { icon: '🌱', title: 'Tanam Pohon', desc: 'Ikut serta dalam program penanaman pohon di lingkungan sekitar.' },
  { icon: '♻️', title: 'Kurangi Plastik', desc: 'Gunakan tas belanja dan botol minum yang dapat dipakai ulang.' },
  { icon: '🚲', title: 'Transportasi Hijau', desc: 'Gunakan sepeda, jalan kaki, atau transportasi umum.' },
  { icon: '💡', title: 'Hemat Energi', desc: 'Matikan lampu dan peralatan listrik yang tidak digunakan.' },
  { icon: '🚿', title: 'Hemat Air', desc: 'Gunakan air secukupnya dan perbaiki kebocoran segera.' },
  { icon: '🗑️', title: 'Pilah Sampah', desc: 'Pisahkan sampah organik, anorganik, dan B3 dengan benar.' },
]

export default function Environment() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-600 to-emerald-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Lingkungan</h1>
          <p className="text-lg text-green-100 max-w-2xl leading-relaxed">
            Bumi adalah rumah kita bersama. Kenali isu-isu lingkungan terkini dan
            pelajari apa yang bisa kita lakukan untuk menjaga kelestarian alam Indonesia.
          </p>
        </div>
      </section>

      {/* Issues */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Isu Lingkungan Utama</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Tantangan lingkungan yang memerlukan perhatian dan aksi nyata dari kita semua.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {issues.map((issue) => (
            <div
              key={issue.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="relative">
                <img src={issue.image} alt={issue.title} className="w-full h-56 object-cover" />
                <div className="absolute bottom-4 right-4 bg-green-600 text-white rounded-xl px-4 py-2 text-center">
                  <div className="text-lg font-bold">{issue.stat}</div>
                  <div className="text-xs">{issue.statLabel}</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{issue.title}</h3>
                <p className="text-gray-600 leading-relaxed">{issue.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Actions */}
      <section className="bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Yang Bisa Kamu Lakukan</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Perubahan besar dimulai dari langkah kecil. Berikut aksi nyata yang bisa kamu lakukan setiap hari.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {actions.map((action) => (
              <div
                key={action.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{action.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{action.title}</h3>
                <p className="text-sm text-gray-500">{action.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
