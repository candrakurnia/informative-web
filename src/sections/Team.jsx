import { useEffect, useId, useMemo, useState } from 'react'
import picture1 from '../assets/picture1.JPG.jpeg'
import picture2 from '../assets/picture2.JPG.jpeg'
import picture3 from '../assets/picture3.JPG.jpeg'
import picture4 from '../assets/picture4.jpeg'
import picture5 from '../assets/picture5.jpeg'
import picture6 from '../assets/picture6.jpeg'
import picture7 from '../assets/picture7.jpeg'
import picture8 from '../assets/picture8.jpeg'

const teamMembers = [
  { name: 'DR. ROMI SAPUTRA, S.SOS, M.SI.', role: 'Founder', photo: picture1 },
  { name: 'AGUS SALIM, S.Pd., M. Pd.', role: 'Pembina', photo: picture3 },
  { name: 'SAPRIL ADAM S.H', role: 'Manager', photo: picture2 },
]

const timAdmin = [
  { photo: picture8 },
]

const mentors = [
  { photo: picture4 },
  { photo: picture5 },
  { photo: picture6 },
  { photo: picture7 },
]

function TeamPhoto({ src, alt, onClick }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(false)
  }, [src])

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative block w-full aspect-[3/4] bg-gray-100 text-left"
    >
      {!isLoaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-gray-100"
        >
          <div className="flex h-full flex-col justify-between p-4">
            <div className="h-2/3 rounded-xl bg-gray-200/90" />
            <div className="space-y-2">
              <div className="h-3 w-3/4 rounded-full bg-gray-200/90" />
              <div className="h-3 w-1/2 rounded-full bg-gray-200/80" />
            </div>
          </div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </button>
  )
}

function Lightbox({ photos, activeIndex, onClose, onPrev, onNext, titleId }) {
  const activePhoto = photos[activeIndex]
  if (!activePhoto) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <h2 id={titleId} className="sr-only">
        Preview foto tim
      </h2>

      <div className="relative w-full max-w-5xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-3 -right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-gray-900 shadow hover:bg-white"
          aria-label="Tutup"
        >
          <span aria-hidden="true">×</span>
        </button>

        <button
          type="button"
          onClick={onPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow hover:bg-white"
          aria-label="Sebelumnya"
        >
          <span aria-hidden="true">‹</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow hover:bg-white"
          aria-label="Berikutnya"
        >
          <span aria-hidden="true">›</span>
        </button>

        <img
          src={activePhoto.src}
          alt={activePhoto.alt}
          className="mx-auto max-h-[85vh] w-auto rounded-2xl bg-white object-contain shadow-2xl"
        />
      </div>
    </div>
  )
}

export default function Team() {
  const titleId = useId()
  const teamPhotos = useMemo(
    () => [
      ...teamMembers.map((person) => ({
        src: person.photo,
        alt: person.name,
      })),
      ...mentors.map((mentor, index) => ({
        src: mentor.photo,
        alt: `Mentor ${index + 1}`,
      })),
      ...timAdmin.map((admin, index) => ({
        src: admin.photo,
        alt: `Tim Admin ${index + 1}`,
      })),
    ],
    []
  )
  const mentorOffset = teamMembers.length
  const adminOffset = teamMembers.length + mentors.length
  const [activeIndex, setActiveIndex] = useState(null)

  const hasLightbox = activeIndex !== null
  const onClose = () => setActiveIndex(null)
  const onPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + teamPhotos.length) % teamPhotos.length))
  const onNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % teamPhotos.length))

  useEffect(() => {
    if (!hasLightbox) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasLightbox])

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
                <TeamPhoto
                  src={person.photo}
                  alt={person.name}
                  onClick={() => setActiveIndex(index)}
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
                  <TeamPhoto
                    src={mentor.photo}
                    alt={`Mentor ${index + 1}`}
                    onClick={() => setActiveIndex(mentorOffset + index)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Tim Admin</span>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {timAdmin.map((timAdmin, index) => (
              <div key={index} className="text-center w-full max-w-sm mx-auto">
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow mb-4">
                  <TeamPhoto
                    src={timAdmin.photo}
                    alt="Tim Admin"
                    onClick={() => setActiveIndex(adminOffset + index)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {hasLightbox && (
        <Lightbox
          photos={teamPhotos}
          activeIndex={activeIndex}
          onClose={onClose}
          onPrev={onPrev}
          onNext={onNext}
          titleId={titleId}
        />
      )}
    </section>
  )
}
