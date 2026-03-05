import galery1 from '../assets/galery_1.png'
import galery2 from '../assets/galery_2.png'
import galery3 from '../assets/galery_3.png'
import galery4 from '../assets/galery_4.png'
import galery5 from '../assets/galery_5.png'
import galery6 from '../assets/galery_6.png'
import galery7 from '../assets/galery_7.png'
import galery8 from '../assets/galery_8.png'
import galery9 from '../assets/galery_9.png'

const photos = [
  galery1, galery2, galery3,
  galery4, galery5, galery6,
  galery7, galery8, galery9,
]

export default function Gallery() {
  return (
    <section id="galeri" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Dokumentasi</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            Galeri Kegiatan Bimbel
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Lihat suasana belajar dan berbagai kegiatan di Bimbel Sukses Pamong Praja.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {photos.map((src, index) => (
            <div key={index} className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <img
                src={src}
                alt={`Kegiatan Bimbel SPP ${index + 1}`}
                className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
