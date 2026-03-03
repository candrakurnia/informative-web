const testimonials = [
  {
    name: 'Rizky Pratama',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    institution: 'IPDN Angkatan 2024',
    region: 'Asal: Jawa Barat',
    quote: 'Alhamdulillah, berkat bimbingan dari Bimbel SPP saya berhasil lolos seleksi IPDN. Materi yang diajarkan sangat relevan dengan soal yang keluar. Pengajarnya sabar dan selalu memotivasi. Terima kasih Bimbel SPP!',
  },
  {
    name: 'Anisa Rahma',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
    institution: 'PKN STAN 2024',
    region: 'Asal: Sumatera Selatan',
    quote: 'Saya awalnya tidak percaya diri, tapi Bimbel SPP benar-benar membimbing saya dari nol. Try out rutin dan pembahasan soal yang detail membuat saya terbiasa mengerjakan soal dengan cepat dan tepat.',
  },
  {
    name: 'Muhammad Faisal',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    institution: 'IPDN Angkatan 2023',
    region: 'Asal: Sulawesi Selatan',
    quote: 'Pembinaan fisik di Bimbel SPP sangat membantu saya lolos tes jasmani. Instrukturnya profesional dan program latihannya terstruktur. Semua aspek seleksi benar-benar dipersiapkan di sini.',
  },
  {
    name: 'Putri Maharani',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    institution: 'STIN 2024',
    region: 'Asal: DKI Jakarta',
    quote: 'Bimbel SPP bukan hanya tempat belajar, tapi keluarga kedua. Pengajar dan teman-teman sesama siswa saling mendukung. Atmosfer belajarnya positif dan kompetitif secara sehat.',
  },
  {
    name: 'Ahmad Syauqi',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
    institution: 'IPDN Angkatan 2023',
    region: 'Asal: Kalimantan Timur',
    quote: 'Saya ikut kelas online karena domisili jauh, tapi kualitas belajarnya tetap luar biasa. Mentoring 1-on-1 dan rekaman kelas sangat membantu. Saya berhasil lolos IPDN dari kelas online!',
  },
  {
    name: 'Dinda Ayu Lestari',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
    institution: 'Poltekip 2024',
    region: 'Asal: Jawa Timur',
    quote: 'Strategi mengerjakan soal SKD yang diajarkan di Bimbel SPP sangat efektif. Nilai TKP saya meningkat drastis. Saya juga sangat terbantu dengan simulasi wawancara. Recommended banget!',
  },
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
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100"
            >
              {/* Quote */}
              <div className="text-blue-200 text-5xl leading-none mb-3">"</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 -mt-4">{t.quote}</p>

              {/* Profile */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-100"
                />
                <div>
                  <div className="font-bold text-gray-800">{t.name}</div>
                  <div className="text-sm text-blue-600 font-medium">{t.institution}</div>
                  <div className="text-xs text-gray-400">{t.region}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
