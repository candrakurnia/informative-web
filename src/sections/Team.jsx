import picture1 from '../assets/picture1.JPG.jpeg'
import picture2 from '../assets/picture2.JPG.jpeg'
import picture3 from '../assets/picture3.PNG'

const team = [
  { name: 'DR. ROMI SAPUTRA, S.SOS, M.SI.', role: 'Founder', photo: picture1 },
  { name: 'SAPRIL ADAM', role: 'Manager', photo: picture2 },
  { name: 'Agus Salim, S.Pd.I', role: 'Pembina Umum', photo: picture3 },
]

export default function Team() {
  return (
    <section id="tim" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Tim Kami</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            Founder, Manager, dan Pembina Bimbel SPP
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((person, index) => (
            <div
              key={person.name}
              className={
                index === 2
                  ? 'text-center md:col-span-2 md:justify-self-center md:w-full md:max-w-sm'
                  : 'text-center'
              }
            >
              <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow mb-4">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              <span className="inline-block text-blue-600 text-sm font-semibold mb-1">{person.role}</span>
              <h3 className="text-lg font-bold text-gray-900">{person.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
