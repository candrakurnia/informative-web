const teamMembers = [
  {
    name: 'Andi Pratama',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    desc: 'Berpengalaman 15 tahun di dunia media digital dan jurnalisme.',
  },
  {
    name: 'Sari Dewi',
    role: 'Editor in Chief',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
    desc: 'Ahli konten editorial dengan fokus pada akurasi dan kualitas.',
  },
  {
    name: 'Budi Santoso',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    desc: 'Full-stack developer yang membangun platform ini dari nol.',
  },
  {
    name: 'Maya Putri',
    role: 'Content Strategist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    desc: 'Spesialis strategi konten digital dan engagement audience.',
  },
]

const values = [
  {
    icon: '🎯',
    title: 'Akurasi',
    desc: 'Setiap informasi yang kami sajikan telah melalui proses verifikasi dan validasi yang ketat.',
  },
  {
    icon: '💡',
    title: 'Inovasi',
    desc: 'Kami terus berinovasi dalam penyajian konten agar mudah dipahami oleh semua kalangan.',
  },
  {
    icon: '🤝',
    title: 'Kolaborasi',
    desc: 'Bekerja sama dengan para ahli dan kontributor terbaik di bidangnya masing-masing.',
  },
  {
    icon: '🌍',
    title: 'Inklusivitas',
    desc: 'Menyajikan informasi yang relevan untuk semua lapisan masyarakat Indonesia.',
  },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80')] bg-cover bg-center opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang Kami</h1>
          <p className="text-lg text-emerald-100 max-w-2xl leading-relaxed">
            InfoNusantara didirikan dengan misi untuk menyebarkan informasi yang akurat, bermanfaat, dan
            menginspirasi seluruh masyarakat Indonesia.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Cerita Kami</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                InfoNusantara lahir dari keprihatinan akan banyaknya informasi yang tidak akurat beredar di internet.
                Didirikan pada tahun 2020, kami berkomitmen untuk menjadi sumber informasi terpercaya bagi masyarakat Indonesia.
              </p>
              <p>
                Dengan tim yang terdiri dari jurnalis berpengalaman, peneliti, dan teknolog, kami menyajikan artikel-artikel
                berkualitas tinggi yang mencakup berbagai topik mulai dari teknologi, kesehatan, hingga budaya Nusantara.
              </p>
              <p>
                Hingga saat ini, InfoNusantara telah melayani lebih dari 50.000 pembaca setia setiap bulannya dan terus
                bertumbuh sebagai salah satu portal informasi terpercaya di Indonesia.
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
              alt="Tim InfoNusantara bekerja bersama"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nilai-Nilai Kami</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Empat pilar yang menjadi fondasi kami dalam menyajikan informasi berkualitas.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-emerald-50 transition-colors">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Tim Kami</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Orang-orang hebat di balik setiap artikel yang Anda baca.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <img src={member.image} alt={member.name} className="w-full h-56 object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-blue-600 mb-2">{member.role}</p>
                <p className="text-sm text-gray-500">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
