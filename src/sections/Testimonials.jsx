const testimonials = [
  {
    name: 'AHMAD SOFIAN GINTING',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    institution: 'PTDI-STTD 2022',
    region: 'Asal: RIAU',
    quote: 'Kesan saya selama dua tahun lebih mengikuti bimbingan belajar di SPP, saya merasakan banyak pengalaman dan pembelajaran yang sangat berharga. SPP bukan hanya menjadi tempat belajar materi akademik, tapi juga tempat untuk membentuk mental, kedisiplinan, dan semangat juang dalam meraih cita-cita masuk sekolah kedinasan.',
  },
  {
    name: 'MUHAMMAD PAKAL PIRMANANDA',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
    institution: 'IPDN 2021',
    region: 'Asal: Lampung',
    quote: 'Kesan saya sebagai alumni SPP, tentunya saya mendapatkan banyak ilmu, pelajaran, serta pengalaman yang sangat luar biasa dari tenaga ahli dan teman-teman dari SPP, yang belum tentu saya temukan dan saya dapatkan di tempat lain. selama itu juga diri saya dipersiapkan dan di didik untuk lebih disiplin, tegas, dan bisa cepat memahami banyak hal. Terimakasih Untuk SPP, TERBAIKKK !!!',
  },
  {
    name: 'WIRAWAFA PUTRA RECHAR',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    institution: 'IPDN Angkatan 2025',
    region: 'Asal: Jawa Barat',
    quote: 'Proses pembelajaran berjalan dengan baik, terstruktur, dan mudah dipahami. Materi yang diberikan sangat relevan serta disampaikan dengan cara yang menarik sehingga membuat saya semakin semangat untuk belajar.',
  },
  {
    name: 'VISCA DEA JELITA',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    institution: 'KEMENTERIAN IMIGRASI & PEMASYARAKATAN 2024',
    region: 'Asal: Lampung',
    quote: 'Kesan nya seru banget bisa ketemu sama temen temen dari nusantara, mentor nya juga asik dan fleksibel untuk diajak diskusi, Sukses terus buat Spp!!!',
  },
  {
    name: 'MUHAMMAD SULTAN ALFARIZI',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
    institution: 'KEMENTERIAN IMIGRASI & PEMASYARAKATAN 2024',
    region: 'Asal: Sumatera Selatan',
    quote: '~ tidak bisa berkata kata, SPP BESTTTTTTT! ~',
  },
  {
    name: 'MUHAMMAD FADEL AULIA, S.H',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
    institution: 'KEJAKSAAN RI 2024',
    region: 'Asal: Lampung',
    quote: 'Pembelajaranya maximal dan pengelolaan materi sangat baik dari mentor sehingga cepat untuk di pahami',
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
