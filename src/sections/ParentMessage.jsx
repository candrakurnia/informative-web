export default function ParentMessage() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-amber-200/30 rounded-3xl blur-xl"></div>
            <img
              src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=600&q=80"
              alt="Orang tua mendampingi anak belajar"
              className="relative rounded-3xl shadow-lg w-full h-[420px] object-cover"
            />
          </div>

          <div>
            <div className="inline-flex items-center bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              💝 Pesan Untuk Orang Tua
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Untuk Ayah dan Bunda
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Kami memahami bahwa setiap orang tua menginginkan masa depan terbaik untuk putra-putrinya.
                Menjadi abdi negara melalui jalur IPDN dan Sekolah Kedinasan adalah pilihan karier yang
                mulia dan menjanjikan — dengan jaminan langsung bekerja sebagai ASN setelah lulus.
              </p>
              <p>
                Di <strong>Bimbel Sukses Pamong Praja</strong>, kami tidak hanya mempersiapkan anak Ayah dan Bunda
                dalam aspek akademik, tetapi juga membentuk karakter, kedisiplinan, dan mental juang yang
                dibutuhkan selama proses seleksi.
              </p>
              <p>
                Kami memberikan <strong>laporan perkembangan belajar secara berkala</strong>, sehingga Ayah dan Bunda
                dapat terus memantau progress putra-putrinya. Tim kami juga selalu terbuka untuk diskusi
                mengenai strategi terbaik bagi anak.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: '📋', title: 'Laporan Berkala', desc: 'Update progress belajar rutin' },
                { icon: '👨‍👩‍👧', title: 'Konsultasi Orang Tua', desc: 'Sesi diskusi dengan pengajar' },
                { icon: '🛡️', title: 'Lingkungan Aman', desc: 'Pengawasan ketat dan kondusif' },
                { icon: '🎯', title: 'Target Jelas', desc: 'Roadmap belajar terstruktur' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-sm font-semibold text-gray-800">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
