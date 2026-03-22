import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'

export default function SubPageLayout({ title, backHref, backLabel, children }) {
  return (
    <>
      <div className="subpage-header">
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <div className="subpage-breadcrumb">
            <Link href={backHref}>{backLabel}</Link>
            <span style={{ opacity: 0.4 }}>›</span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>{title.slice(0, 40)}{title.length > 40 ? '…' : ''}</span>
          </div>
          <h1 className="subpage-title">{title}</h1>
        </div>
      </div>
      <div className="rule-gold" />

      <Navbar />

      <main style={{ maxWidth: 900, margin: '0 auto', padding: '56px 24px 80px' }}>
        <div className="anim-fade-up">
          {children}
        </div>
        <div style={{ marginTop: 48, paddingTop: 28, borderTop: '1px solid var(--rule-thin)' }}>
          <Link href={backHref} className="btn-outline">← {backLabel}</Link>
        </div>
      </main>

      <Footer />
    </>
  )
}
