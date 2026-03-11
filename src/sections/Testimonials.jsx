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
  { name: 'Ahmad Sofian Ginting', institution: 'PTDI-STTD 2022', region: 'Asal: Riau', nilai:'SKD: 444',  quote: 'Kesan saya selama dua tahun lebih mengikuti bimbingan belajar di SPP, saya merasakan banyak pengalaman dan pembelajaran yang sangat berharga. SPP bukan hanya menjadi tempat belajar materi akademik, tapi juga tempat untuk membentuk mental, kedisiplinan, dan semangat juang dalam meraih cita-cita masuk sekolah kedinasan.' },
  { name: 'Muhammad Pakal Pirmananda', institution: 'IPDN Angkatan 2021', region: 'Asal: Lampung', nilai:'SKD: 443',  quote: 'Kesan saya sebagai alumni SPP, tentunya saya mendapatkan banyak ilmu, pelajaran, serta pengalaman yang sangat luar biasa dari tenaga ahli dan teman-teman dari SPP, yang belum tentu saya temukan dan saya dapatkan di tempat lain. selama itu juga diri saya dipersiapkan dan di didik untuk lebih disiplin, tegas, dan bisa cepat memahami banyak hal. Terimakasih Untuk SPP, TERBAIKKK !!!' },
  { name: 'Wirawafa Putra Rechar', institution: 'IPDN Angkatan 2025', region: 'Asal: Jawa Barat', nilai:'SKD: 483',  quote: 'Proses pembelajaran berjalan dengan baik, terstruktur, dan mudah dipahami. Materi yang diberikan sangat relevan serta disampaikan dengan cara yang menarik sehingga membuat saya semakin semangat untuk belajar.' },
  { name: 'Visca Dea Jelita', institution: 'Kementerian Imigrasi & Pemasyarakatan 2024', region: 'Asal: Lampung', nilai:'SKD: 493',  quote: 'Kesan nya seru banget bisa ketemu sama temen temen dari nusantara, mentor nya juga asik dan fleksibel untuk diajak diskusi, Sukses terus buat Spp!!!' },
  { name: 'Muhammad Sultan Alfarizi', institution: 'Kementerian Imigrasi & Pemasyarakatan 2024', region: 'Asal: Sumatera Selatan', nilai:'SKD: 412',  quote: '~ tidak bisa berkata kata, SPP BESTTTTTTT! ~' },
  { name: 'Muhammad Fadel Aulia, S.H', institution: 'Kejaksaan RI 2024', region: 'Asal: Lampung', nilai:'SKD: 381',  quote: 'Pembelajaranya maximal dan pengelolaan materi sangat baik dari mentor sehingga cepat untuk di pahami' },
  { name: 'Lilis Dwi Suryani', institution: 'POLTEKPIN 2024', region: 'Asal: Jawa Tengah', nilai:'SKD: 412',  quote: 'Terbaik pokoknya🫰🏻.' },
  { name: 'ZAMZAM JALALUDIN KUSUMAH', institution: 'IPDN Angkatan 2025', region: 'Asal: Jawa Barat', nilai:'SKD: 472', quote: 'Belajar seru sampe paham semua materi, pokoknya mantappp!!' },
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
                  className="w-20 h-24 rounded-2xl object-fill bg-white ring-2 ring-blue-100"
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
