import picture1 from '../assets/picture1.JPG.jpeg'
import picture2 from '../assets/picture2.JPG.jpeg'
import picture3 from '../assets/picture3.JPG.jpeg'
import picture4 from '../assets/picture4.jpeg'
import picture5 from '../assets/picture5.jpeg'
import picture6 from '../assets/picture6.jpeg'
import picture7 from '../assets/picture7.jpeg'

const teamMembers = [
  { name: 'DR. ROMI SAPUTRA, S.SOS, M.SI.', role: 'Founder', photo: picture1 },
  { name: 'AGUS SALIM, S.Pd.I', role: 'Pembina', photo: picture3 },
  { name: 'SAPRIL ADAM', role: 'Manager', photo: picture2 },
]

const mentors = [
  { photo: picture4 },
  { photo: picture5 },
  { photo: picture6 },
  { photo: picture7 },
]

export default function Team() {
  return (
    <section id="tim" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Tim Kami</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            Founder, Manager, Pembina dan Mentor Bimbel SPP
          </h2>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {teamMembers.map((person, index) => (
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

        {/* Mentors Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Mentor</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mentors.map((mentor, index) => (
              <div key={index} className="text-center">
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow mb-4">
                  <img
                    src={mentor.photo}
                    className="w-full aspect-[3/4] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
