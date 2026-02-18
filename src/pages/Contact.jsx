import { useState } from 'react'

const contactInfo = [
  {
    icon: '📧',
    title: 'Email',
    detail: 'info@infonusantara.id',
    desc: 'Kirim email dan kami akan merespon dalam 24 jam.',
  },
  {
    icon: '📞',
    title: 'Telepon',
    detail: '+62 21 1234 5678',
    desc: 'Senin - Jumat, 09:00 - 17:00 WIB.',
  },
  {
    icon: '📍',
    title: 'Alamat',
    detail: 'Jl. Sudirman No. 123, Jakarta',
    desc: 'Kunjungi kantor kami di pusat kota Jakarta.',
  },
  {
    icon: '💬',
    title: 'Media Sosial',
    detail: '@infonusantara',
    desc: 'Ikuti kami di Instagram, Twitter, dan Facebook.',
  },
]

const faqs = [
  {
    question: 'Bagaimana cara berkontribusi artikel?',
    answer:
      'Anda dapat mengirimkan artikel melalui email ke kontribusi@infonusantara.id. Tim editorial kami akan meninjau artikel Anda dalam 3-5 hari kerja. Pastikan artikel original, informatif, dan dilengkapi dengan sumber referensi.',
  },
  {
    question: 'Apakah konten di InfoNusantara gratis?',
    answer:
      'Ya, seluruh konten di InfoNusantara dapat diakses secara gratis. Kami berkomitmen untuk menyediakan informasi berkualitas yang dapat diakses oleh semua kalangan masyarakat Indonesia.',
  },
  {
    question: 'Bagaimana cara melaporkan konten yang tidak akurat?',
    answer:
      'Jika Anda menemukan informasi yang tidak akurat, silakan hubungi kami melalui email koreksi@infonusantara.id dengan menyertakan link artikel dan penjelasan koreksi. Kami sangat menghargai masukan dari pembaca.',
  },
  {
    question: 'Apakah tersedia kerjasama untuk institusi?',
    answer:
      'Ya, kami membuka kerjasama dengan institusi pendidikan, organisasi, dan perusahaan. Silakan hubungi tim partnership kami di partnership@infonusantara.id untuk informasi lebih lanjut.',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Terima kasih! Pesan Anda telah dikirim. Kami akan segera menghubungi Anda.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80')] bg-cover bg-center opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h1>
          <p className="text-lg text-indigo-100 max-w-2xl leading-relaxed">
            Punya pertanyaan, saran, atau ingin bekerjasama? Kami senang mendengar dari Anda.
            Jangan ragu untuk menghubungi tim InfoNusantara.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info) => (
            <div key={info.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="text-4xl mb-3">{info.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-1">{info.title}</h3>
              <p className="text-indigo-600 font-medium mb-2">{info.detail}</p>
              <p className="text-sm text-gray-400">{info.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form & Map */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-colors"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-colors"
                    placeholder="email@contoh.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-colors"
                    placeholder="Topik pesan Anda"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-colors resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Pertanyaan Umum (FAQ)</h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.question} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
