import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

export const metadata = { title: 'Award Photos | Genesis Obando' }

const photos = [
  { src: '/images/awardwin1.jpg', alt: 'Award ceremony photo', credit: 'Photo: Thomas E. Franklin' },
  { src: '/images/awardwin2.png', alt: 'Award ceremony photo', credit: 'Photo: Thomas E. Franklin' },
  { src: '/images/awardwin3.png', alt: 'Award ceremony photo', credit: 'Photo: Thomas E. Franklin' },
  { src: '/images/awardwin4.jpeg', alt: 'Award photo', credit: '' },
]

export default function PRPhotos() {
  return (
    <>
      <div className="subpage-header">
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>
          <div className="subpage-breadcrumb">
            <Link href="/">Home</Link> <span style={{ opacity: 0.4 }}>›</span>
            <Link href="/#portfolio">Portfolio</Link>
          </div>
          <h1 className="subpage-title">Montclair News Lab — Award Photos</h1>
          <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontStyle: 'italic', color: 'rgba(255,255,255,0.55)', marginTop: 10, fontSize: '0.9rem' }}>
            Hurricane Recovery Mission to Puerto Rico · "Open for Business"
          </p>
        </div>
      </div>
      <div className="rule-gold" />

      <Navbar />

      <main style={{ maxWidth: 1000, margin: '0 auto', padding: '56px 24px 80px' }}>
        <div className="photo-grid anim-fade-up">
          {photos.map((photo, i) => (
            <div key={i} className="photo-card">
              <img src={photo.src} alt={photo.alt} />
              {photo.credit && (
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.62rem', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.45)', padding: '8px 12px', background: 'var(--ink)' }}>
                  {photo.credit}
                </p>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 56, paddingTop: 28, borderTop: '1px solid var(--rule-thin)' }}>
          <Link href="/#portfolio" className="btn-outline">← Back to Portfolio</Link>
        </div>
      </main>

      <Footer />
    </>
  )
}
