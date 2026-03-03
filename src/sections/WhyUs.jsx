const trainings = [
  { icon: '✔', text: 'Simulasi CAT real test' },
  { icon: '✔', text: 'Evaluasi nilai berkala' },
  { icon: '✔', text: 'Strategi manajemen waktu saat ujian' },
  { icon: '✔', text: 'Motivasi & pembentukan mental pejuang' },
]

const reasons = [
  {
    icon: '🏆',
    title: 'Tingkat Kelulusan 95%',
    desc: 'Dengan metode pembelajaran teruji dan kurikulum yang selalu diperbarui, tingkat kelulusan siswa Bimbel SPP mencapai 95% setiap tahunnya.',
  },
  {
    icon: '👨‍🏫',
    title: 'Pengajar Berpengalaman',
    desc: 'Tim pengajar terdiri dari alumni IPDN, dosen, dan praktisi pemerintahan yang berpengalaman lebih dari 10 tahun di bidangnya.',
  },
  {
    icon: '📚',
    title: 'Kurikulum Terupdate',
    desc: 'Materi selalu diperbarui sesuai dengan pola soal terbaru SKD, SKB, dan seleksi khusus IPDN serta Sekolah Kedinasan lainnya.',
  },
  {
    icon: '🎯',
    title: 'Try Out Berkala',
    desc: 'Simulasi ujian rutin dengan soal-soal yang menyerupai seleksi asli, lengkap dengan analisis hasil dan pembahasan menyeluruh.',
  },
  {
    icon: '💪',
    title: 'Pembinaan Fisik & Mental',
    desc: 'Selain akademik, kami juga memberikan pembinaan fisik (lari, pull-up, push-up) dan mental untuk persiapan seleksi jasmani.',
  },
  {
    icon: '🤝',
    title: 'Bimbingan Sampai Lolos',
    desc: 'Pendampingan penuh dari awal pendaftaran hingga dinyatakan lulus. Termasuk bimbingan wawancara dan persiapan berkas.',
  },
  {
    icon: '💻',
    title: 'Kelas Online & Offline',
    desc: 'Fleksibilitas belajar dengan pilihan kelas online via Zoom dan offline di lokasi bimbel, sesuai kebutuhan siswa.',
  },
  {
    icon: '📊',
    title: 'Monitoring Progress',
    desc: 'Laporan perkembangan belajar berkala yang dikirimkan kepada orang tua agar dapat memantau progress anak.',
  },
]

export default function WhyUs() {
  return (
    <section id="mengapa-kami" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Message */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Keunggulan Kami</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            Kenapa Harus Bimbel SPP?
          </h2>
          <p className="text-gray-500 text-lg mb-2">
            Karena seleksi kedinasan itu ketat.
          </p>
          <p className="text-gray-500 text-lg mb-8">
            Kamu butuh strategi, bukan hanya belajar sendiri.
          </p>

          <p className="text-gray-700 font-semibold text-lg mb-5">
            Di Bimbel SPP, kamu dilatih dengan:
          </p>

          <div className="inline-flex flex-col gap-3 text-left">
            {trainings.map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <span className="text-green-500 font-bold text-lg">✔</span>
                <span className="text-gray-700 text-lg">{item.text}</span>
              </div>
            ))}
          </div>

          <p className="text-xl md:text-2xl font-extrabold text-blue-600 mt-8">
            Target kami satu: <span className="text-yellow-500">LOLOS SKD.</span>
          </p>
        </div>

        {/* Detail Cards
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group bg-gray-50 hover:bg-blue-600 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{reason.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-white mb-3 transition-colors">
                {reason.title}
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-blue-100 leading-relaxed transition-colors">
                {reason.desc}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
