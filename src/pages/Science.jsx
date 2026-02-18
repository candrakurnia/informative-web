const discoveries = [
  {
    title: 'Teleskop James Webb: Mengungkap Misteri Alam Semesta',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80',
    category: 'Astronomi',
    desc: 'Teleskop James Webb Space Telescope (JWST) telah merevolusi pemahaman kita tentang alam semesta. Dengan kemampuan inframerah yang canggih, JWST berhasil menangkap gambar galaksi tertua yang terbentuk hanya 300 juta tahun setelah Big Bang. Penemuan ini membuka babak baru dalam astronomi dan kosmologi.',
  },
  {
    title: 'CRISPR: Revolusi Rekayasa Genetika',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
    category: 'Bioteknologi',
    desc: 'Teknologi CRISPR-Cas9 memungkinkan ilmuwan mengedit DNA dengan presisi yang belum pernah ada sebelumnya. Dari pengobatan penyakit genetik hingga pengembangan tanaman tahan iklim, CRISPR menjanjikan solusi untuk berbagai tantangan kesehatan dan pangan global.',
  },
  {
    title: 'Fisika Kuantum: Komputer Masa Depan',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
    category: 'Fisika',
    desc: 'Komputer kuantum memanfaatkan prinsip superposisi dan entanglement untuk memproses informasi secara eksponensial lebih cepat dari komputer klasik. Google, IBM, dan berbagai lembaga riset berlomba mengembangkan komputer kuantum yang stabil untuk memecahkan masalah yang mustahil diselesaikan komputer biasa.',
  },
  {
    title: 'Energi Fusi Nuklir: Sumber Energi Tak Terbatas',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80',
    category: 'Energi',
    desc: 'Ilmuwan berhasil mencapai tonggak bersejarah dalam fusi nuklir — menghasilkan lebih banyak energi dari yang digunakan untuk memicunya. Fusi nuklir menjanjikan sumber energi yang bersih, aman, dan hampir tak terbatas, meniru proses yang terjadi di inti matahari.',
  },
]

const fields = [
  { icon: '🔭', name: 'Astronomi', count: '45 Artikel' },
  { icon: '🧬', name: 'Biologi', count: '62 Artikel' },
  { icon: '⚛️', name: 'Fisika', count: '38 Artikel' },
  { icon: '🧪', name: 'Kimia', count: '41 Artikel' },
  { icon: '🌍', name: 'Geologi', count: '29 Artikel' },
  { icon: '🧠', name: 'Neurosains', count: '33 Artikel' },
  { icon: '🌊', name: 'Oseanografi', count: '25 Artikel' },
  { icon: '🦠', name: 'Mikrobiologi', count: '36 Artikel' },
]

export default function Science() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-cyan-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=1920&q=80')] bg-cover bg-center opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sains</h1>
          <p className="text-lg text-cyan-100 max-w-2xl leading-relaxed">
            Dunia sains penuh dengan keajaiban dan penemuan yang mengubah pemahaman kita tentang alam semesta.
            Jelajahi penemuan ilmiah terbaru dari berbagai bidang.
          </p>
        </div>
      </section>

      {/* Fields */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {fields.map((field) => (
              <div key={field.name} className="text-center p-3 rounded-xl hover:bg-cyan-50 transition-colors cursor-pointer">
                <div className="text-2xl mb-1">{field.icon}</div>
                <div className="text-sm font-medium text-gray-700">{field.name}</div>
                <div className="text-xs text-gray-400">{field.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discoveries */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Penemuan & Riset Terkini</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Terobosan ilmiah terbaru yang sedang membentuk masa depan umat manusia.
          </p>
        </div>
        <div className="space-y-8">
          {discoveries.map((item, index) => (
            <div
              key={item.title}
              className="grid md:grid-cols-5 gap-6 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className={`md:col-span-2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <img src={item.image} alt={item.title} className="w-full h-64 md:h-full object-cover" />
              </div>
              <div className={`md:col-span-3 p-8 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <span className="inline-block w-fit bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {item.category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fun Fact */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold mb-8">Tahukah Kamu?</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">200 Miliar+</div>
              <div className="text-cyan-200">Bintang di galaksi Bimasakti</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">37.2 Triliun</div>
              <div className="text-cyan-200">Sel dalam tubuh manusia</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8.7 Juta</div>
              <div className="text-cyan-200">Spesies di Bumi</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
