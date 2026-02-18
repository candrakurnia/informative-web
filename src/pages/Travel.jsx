const destinations = [
  {
    title: 'Bali — Pulau Dewata',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    location: 'Bali',
    highlights: ['Pura Tanah Lot', 'Ubud Rice Terraces', 'Pantai Kuta', 'Gunung Agung'],
    desc: 'Bali adalah destinasi wisata kelas dunia yang terkenal dengan keindahan alam, budaya Hindu yang kaya, dan keramahan penduduknya. Dari sawah terasering Tegallalang hingga pantai-pantai eksotis di Uluwatu, Bali menawarkan pengalaman tak terlupakan bagi setiap pengunjung.',
  },
  {
    title: 'Raja Ampat — Surga Bawah Laut',
    image: 'https://images.unsplash.com/photo-1570789210967-2cac24f169ab?w=800&q=80',
    location: 'Papua Barat',
    highlights: ['Diving & Snorkeling', 'Pianemo Islands', 'Wayag Islands', 'Misool'],
    desc: 'Raja Ampat memiliki 75% dari seluruh spesies karang di dunia dan lebih dari 1.500 spesies ikan. Kepulauan ini terdiri dari empat pulau utama: Waigeo, Batanta, Salawati, dan Misool. Air lautnya yang jernih dan kehidupan bawah laut yang luar biasa menjadikannya destinasi diving nomor satu di dunia.',
  },
  {
    title: 'Yogyakarta — Kota Budaya',
    image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=800&q=80',
    location: 'DI Yogyakarta',
    highlights: ['Candi Borobudur', 'Candi Prambanan', 'Kraton', 'Malioboro'],
    desc: 'Yogyakarta adalah pusat budaya Jawa yang masih mempertahankan tradisi keraton. Dua candi warisan dunia UNESCO — Borobudur dan Prambanan — menjadi daya tarik utama. Selain sejarah, Yogya juga dikenal sebagai kota pelajar dan surga kuliner dengan harga terjangkau.',
  },
  {
    title: 'Labuan Bajo — Gerbang Komodo',
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&q=80',
    location: 'NTT',
    highlights: ['Taman Nasional Komodo', 'Pulau Padar', 'Pink Beach', 'Manta Point'],
    desc: 'Labuan Bajo adalah gerbang menuju Taman Nasional Komodo, habitat alami komodo — reptil terbesar di dunia. Selain bertemu komodo, pengunjung bisa menikmati keindahan Pulau Padar, menyelam di Manta Point, dan bersantai di Pink Beach yang langka.',
  },
  {
    title: 'Danau Toba — Kaldera Raksasa',
    image: 'https://images.unsplash.com/photo-1609946860441-a37b5d5d3e3f?w=800&q=80',
    location: 'Sumatera Utara',
    highlights: ['Pulau Samosir', 'Desa Tomok', 'Air Terjun Sipiso-Piso', 'Budaya Batak'],
    desc: 'Danau Toba adalah danau vulkanik terbesar di dunia, terbentuk dari letusan supervolcano sekitar 75.000 tahun lalu. Di tengah danau terdapat Pulau Samosir yang menjadi pusat budaya Batak Toba. Pemandangan alam yang menakjubkan dan udara sejuk pegunungan menjadikannya destinasi yang sempurna.',
  },
  {
    title: 'Lombok — Pesona Timur Bali',
    image: 'https://images.unsplash.com/photo-1571366343168-631c5bcca7a4?w=800&q=80',
    location: 'NTB',
    highlights: ['Gunung Rinjani', 'Gili Trawangan', 'Pantai Tanjung Aan', 'Desa Sade'],
    desc: 'Lombok menawarkan keindahan alam yang tak kalah memukau dari Bali, namun dengan suasana yang lebih tenang. Gunung Rinjani yang megah, tiga Gili yang eksotis, dan pantai-pantai berpasir putih menjadikan Lombok destinasi favorit bagi pencinta alam dan petualangan.',
  },
]

export default function Travel() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-sky-500 to-blue-700 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Wisata Indonesia</h1>
          <p className="text-lg text-sky-100 max-w-2xl leading-relaxed">
            Dari Sabang sampai Merauke, Indonesia menyimpan jutaan keindahan alam dan budaya.
            Temukan destinasi wisata terbaik untuk petualangan Anda berikutnya.
          </p>
        </div>
      </section>

      {/* Destinations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Destinasi Unggulan</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Enam destinasi wisata terpopuler di Indonesia yang wajib masuk dalam bucket list Anda.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div
              key={dest.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-sky-700 text-xs font-semibold px-3 py-1 rounded-full">
                  📍 {dest.location}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{dest.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{dest.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {dest.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs bg-sky-50 text-sky-600 px-2 py-1 rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Tips */}
      <section className="bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Tips Perjalanan</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎒', title: 'Persiapan', desc: 'Riset destinasi dan buat itinerary perjalanan yang fleksibel.' },
              { icon: '📱', title: 'Dokumentasi', desc: 'Simpan salinan dokumen penting secara digital di cloud.' },
              { icon: '💰', title: 'Anggaran', desc: 'Siapkan dana darurat selain budget utama perjalanan.' },
              { icon: '🌏', title: 'Etika Wisata', desc: 'Hormati budaya lokal dan jaga kebersihan lingkungan.' },
            ].map((tip) => (
              <div key={tip.title} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-3">{tip.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-500">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
