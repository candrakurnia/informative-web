const founders = [
  {
    name: 'Dr. Hendra Wijaya, M.Si',
    role: 'Founder & Direktur Utama',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face',
    bio: 'Alumni IPDN angkatan 1998. Berpengalaman lebih dari 20 tahun di pemerintahan daerah. Mendirikan Bimbel SPP pada tahun 2014 dengan visi mencetak calon pamong praja berkualitas.',
    credentials: ['Alumni IPDN', 'Doktor Ilmu Pemerintahan', '20+ Tahun Pengalaman'],
  },
  {
    name: 'Siti Nurhaliza, S.IP, M.AP',
    role: 'Co-Founder & Manager Akademik',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face',
    bio: 'Alumni IPDN angkatan 2003. Ahli strategi pendidikan dengan pengalaman 15 tahun di bidang pengembangan kurikulum persiapan seleksi kedinasan.',
    credentials: ['Alumni IPDN', 'Magister Administrasi Publik', 'Ahli Kurikulum'],
  },
]

const managers = [
  {
    name: 'Bayu Aditya, S.Pd',
    role: 'Manager Operasional',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face',
    desc: 'Mengelola operasional harian bimbel dan memastikan kualitas layanan terjaga.',
  },
  {
    name: 'Rina Kartika, S.Psi',
    role: 'Manager Pembinaan Mental',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
    desc: 'Psikolog yang menangani pembinaan mental dan persiapan wawancara siswa.',
  },
  {
    name: 'Agus Setiawan',
    role: 'Manager Pembinaan Fisik',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face',
    desc: 'Instruktur fisik bersertifikat, mempersiapkan siswa untuk tes jasmani seleksi.',
  },
  {
    name: 'Dewi Safitri, S.Kom',
    role: 'Manager Kelas Online',
    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face',
    desc: 'Bertanggung jawab atas pengembangan dan pengelolaan platform kelas online.',
  },
]

export default function Team() {
  return (
    <section id="tim" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Tim Kami</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            Orang-Orang di Balik SPP
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Dipimpin oleh alumni IPDN berpengalaman yang memahami seluk-beluk seleksi kedinasan.
          </p>
        </div>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {founders.map((person) => (
            <div
              key={person.name}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="grid sm:grid-cols-5 gap-0">
                <div className="sm:col-span-2">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="w-full h-64 sm:h-full object-cover"
                  />
                </div>
                <div className="sm:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                  <div className="inline-block w-fit bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    {person.role}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{person.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{person.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {person.credentials.map((c) => (
                      <span key={c} className="text-xs bg-white text-blue-600 px-3 py-1 rounded-full font-medium shadow-sm">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Managers */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900">Tim Manajemen</h3>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {managers.map((person) => (
            <div
              key={person.name}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-md transition-shadow text-center"
            >
              <img
                src={person.photo}
                alt={person.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h4 className="font-bold text-gray-800">{person.name}</h4>
                <p className="text-sm text-blue-600 font-medium mb-2">{person.role}</p>
                <p className="text-xs text-gray-500">{person.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
