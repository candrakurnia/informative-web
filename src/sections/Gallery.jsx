// Dynamic import semua gambar galeri dari assets (exclude HEIC - tidak didukung browser)
const galleryModules = import.meta.glob('../assets/galery*.{png,jpg,jpeg}', { eager: true })

const photos = Object.entries(galleryModules)
  .sort(([pathA], [pathB]) => {
    const numA = parseInt(pathA.match(/\d+/)?.[0] ?? '0', 10)
    const numB = parseInt(pathB.match(/\d+/)?.[0] ?? '0', 10)
    return numA - numB
  })
  .map(([, mod]) => mod.default)

function PhotoCard({ src, alt }) {
  return (
    <div className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <img
        src={src}
        alt={alt}
        className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
  )
}

export default function Gallery() {
  return (
    <section id="galeri" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Dokumentasi
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            Galeri Kegiatan Bimbel
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Lihat suasana belajar dan berbagai kegiatan di Bimbel Sukses Pamong Praja.
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {photos.map((src, index) => (
            <PhotoCard
              key={src}
              src={src}
              alt={`Kegiatan Bimbel SPP ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
