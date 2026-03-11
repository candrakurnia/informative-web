// Dynamic import semua gambar galeri dari assets (exclude HEIC - tidak didukung browser)
import { useEffect, useId, useMemo, useState } from 'react'

const galleryModules = import.meta.glob('../assets/galery*.{png,jpg,jpeg}', { eager: true })

const photos = Object.entries(galleryModules)
  .sort(([pathA], [pathB]) => {
    const numA = parseInt(pathA.match(/\d+/)?.[0] ?? '0', 10)
    const numB = parseInt(pathB.match(/\d+/)?.[0] ?? '0', 10)
    return numA - numB
  })
  .map(([, mod]) => mod.default)

function PhotoCard({ src, alt, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 text-left"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </button>
  )
}

function Lightbox({ photos, activeIndex, onClose, onPrev, onNext, titleId }) {
  const src = photos[activeIndex]
  if (!src) return null

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
        Preview foto galeri
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
          src={src}
          alt={`Preview foto galeri ${activeIndex + 1}`}
          className="mx-auto max-h-[85vh] w-auto rounded-2xl bg-white object-contain shadow-2xl"
        />
      </div>
    </div>
  )
}

export default function Gallery() {
  const titleId = useId()
  const galleryPhotos = useMemo(() => photos, [])
  const [activeIndex, setActiveIndex] = useState(null)

  const hasLightbox = activeIndex !== null

  const onClose = () => setActiveIndex(null)
  const onPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + galleryPhotos.length) % galleryPhotos.length))
  const onNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % galleryPhotos.length))

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
    <section id="galeri" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Dokumentasi
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            Galeri Kegiatan Bimbel
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Lihat suasana belajar dan berbagai kegiatan di Bimbel Sukses Pamong Praja.
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {galleryPhotos.map((src, index) => (
            <PhotoCard
              key={src}
              src={src}
              alt={`Kegiatan Bimbel SPP ${index + 1}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      {hasLightbox && (
        <Lightbox
          photos={galleryPhotos}
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
