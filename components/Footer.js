import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer" style={{ marginTop: 80 }}>
      <div className="site-footer-inner">
        <div>
          <div className="footer-name">Genesis Obando</div>
          <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontStyle: 'italic', fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', marginTop: 6 }}>
            Digital Content Producer · Bilingual (English / Spanish)
          </p>
          <div style={{ display: 'flex', gap: 24, marginTop: 20, flexWrap: 'wrap' }}>
            <a href="mailto:obandogenesis@gmail.com" style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>Email</a>
            <a href="https://linkedin.com/in/genesis-obando" target="_blank" rel="noreferrer" style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>LinkedIn</a>
            <a href="/Genesis-Obando-resume.docx.pdf" target="_blank" rel="noreferrer" style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>Resume</a>
          </div>
        </div>
        <p className="site-footer-copy" style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textAlign: 'right', lineHeight: 1.8 }}>
          © 2025<br />All rights reserved.
        </p>
      </div>
    </footer>
  )
}
