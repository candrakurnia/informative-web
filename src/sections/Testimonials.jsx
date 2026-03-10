// Dynamic import foto testimoni dari assets
const photoModules = import.meta.glob('../assets/ic_testimoni*', { eager: true })

const photos = Object.entries(photoModules)
  .sort(([pathA], [pathB]) => {
    const numA = parseInt(pathA.match(/\d+/)?.[0] ?? '0', 10)
    const numB = parseInt(pathB.match(/\d+/)?.[0] ?? '0', 10)
    return numA - numB
  })
  .map(([, mod]) => mod.default)

const testimonials = [
  { name: 'Lilis Dwi Suryani', institution: 'POLTEKPIN 2024', region: 'Asal: Jawa Tengah', nilai:'SKD: 412',  quote: 'Terbaik pokoknya🫰🏻.' },
  { name: 'M Dioluvans Virnanda', institution: 'Kejaksaan RI 2024', region: 'Asal: Lampung', nilai:'SKD: 403', quote: 'Mentor nya fleksibel dan sabar ngajarin materi sampai paham, fasilitas belajar oke, SPP best!' },
  { name: 'Mochamad Zacky Khadafi', institution: 'IPDN Angkatan 2025', region: 'Asal: Banten', nilai:'SKD: 478', quote: 'SAM (Seru Asik Mantap).' },
  { name: 'MUHAMMAD ZEIN MUTTAQIN', institution: 'IPDN Angkatan 2025', region: 'Asal: Banten', nilai:'SKD: 461', quote: 'Selama belajar di bimbel SPP saya mendapatkan banyak pengalaman dan pengetahuan yang bermanfaat. Materi yang diajarkan menjadi lebih mudah dipahami karena cara penyampaiannya jelas dan para pengajarnya juga sabar dalam membimbing siswa. Suasana belajar yang nyaman, seru, dan asik membuat saya lebih semangat untuk mengikuti setiap pembelajaran. Semoga bimbel SPP terus berkembang, semakin baik, dan tetap membantu para siswa dalam mencapai cita-cita.' },
  { name: 'FADHIL HAEKAL SYARKANI', institution: 'IPDN Angkatan 2025', region: 'Asal: Riau', nilai:'SKD: 493', quote: '6 bulan yang sama sekali ga sia sia banyak pengalaman dan pelajaran yang di dapatkan di bimbel SPP inii👍' },
  { name: 'M DIOLUVANS VIRNANDA', institution: 'KEJAKSAAN RI 2024', region: 'Asal: Lampung', nilai:'SKD: 403', quote: 'Mentor nya fleksibel dan sabar ngajarin materi sampai paham, fasilitas belajar oke, SPP best!' },
]

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Testimoni</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            Apa Kata Alumni Kami?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Dengarkan langsung cerita sukses dari para alumni Bimbel SPP yang telah lolos seleksi.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="text-blue-200 text-5xl leading-none mb-3">"</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 -mt-4">{t.quote}</p>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img
                  src={photos[index]}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-100"
                />
                <div>
                  <div className="font-bold text-gray-800">{t.name}</div>
                  <div className="text-sm text-blue-600 font-medium">{t.institution}</div>
                  <div className="text-xs text-gray-400">{t.region}</div>
                  <div className="text-xs text-gray-400">{t.nilai}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
