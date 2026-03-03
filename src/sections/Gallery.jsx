const photos = [
  {
    src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    alt: 'Suasana kelas bimbel',
    caption: 'Kegiatan belajar mengajar di kelas',
  },
  {
    src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80',
    alt: 'Latihan fisik',
    caption: 'Pembinaan fisik persiapan seleksi',
  },
  {
    src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80',
    alt: 'Diskusi kelompok',
    caption: 'Diskusi dan belajar kelompok',
  },
  {
    src: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&q=80',
    alt: 'Try out akbar',
    caption: 'Pelaksanaan try out akbar',
  },
  {
    src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80',
    alt: 'Simulasi wawancara',
    caption: 'Simulasi wawancara seleksi',
  },
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80',
    alt: 'Kegiatan bersama',
    caption: 'Kebersamaan siswa bimbel SPP',
  },
]

export default function Gallery() {
  return (
    <section id="galeri" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Dokumentasi</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            Galeri Kegiatan
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Lihat suasana belajar dan berbagai kegiatan di Bimbel Sukses Pamong Praja.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {photos.map((photo) => (
            <div key={photo.alt} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">{photo.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Video Kegiatan Bimbel SPP</h3>
            <p className="text-gray-500">Tonton suasana kegiatan belajar dan pembinaan di bimbel kami</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative bg-gray-100 rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
                alt="Video kegiatan belajar"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                📹 Suasana Kelas Bimbel SPP
              </div>
            </div>
            <div className="relative bg-gray-100 rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80"
                alt="Video latihan fisik"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                📹 Pembinaan Fisik & Mental
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
