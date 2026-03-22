import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SafeImg from '../components/SafeImg'

export const metadata = {
  title: 'Genesis Obando | Digital Content Portfolio',
  description: 'Bilingual digital content producer with 6+ years of experience in network news and social media strategy.',
}

export default function Home() {
  return (
    <>
      {/* ── MASTHEAD ─────────────────────────────────── */}
      <header className="masthead">
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>

          {/* Date bar */}
          <div className="masthead-date-bar">
            <span>Digital Content Portfolio</span>
            <span>Newark, NJ · New York, NY</span>
            <span>6+ Years Experience</span>
          </div>

          {/* Main hero */}
          <div className="masthead-hero-grid">
            <div>
              <h1 className="masthead-name anim-reveal">Genesis<br />Obando</h1>
              <div className="masthead-rule" style={{ margin: '20px 0 18px' }} />
              <p className="masthead-byline anim-fade-up delay-2">
                Digital Content Producer &amp; Bilingual Journalist
              </p>
              <div className="masthead-links anim-fade-up delay-3">
                <a href="mailto:obandogenesis@gmail.com">obandogenesis@gmail.com</a>
                <a href="https://linkedin.com/in/genesis-obando" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href="/Genesis-Obando-resume.docx.pdf" target="_blank" rel="noreferrer">Download Resume ↗</a>
              </div>
            </div>

            {/* Profile photo */}
            <div className="anim-scale delay-2" style={{
              width: 220,
              height: 260,
              overflow: 'hidden',
              flexShrink: 0,
              borderTop: '3px solid var(--gold)',
              borderBottom: '3px solid var(--gold)',
            }}>
              <SafeImg
                src="/images/face.JPG"
                alt="Genesis Obando"
                className=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', filter: 'grayscale(20%) contrast(1.05)' }}
              />
            </div>
          </div>

          {/* Bottom rule */}
          <div className="masthead-rule" />
        </div>
      </header>

      <Navbar />

      <main style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>

        {/* ── ABOUT ───────────────────────────────────── */}
        <section id="about" style={{ padding: '64px 0 56px' }}>
          <div className="section-label anim-reveal">About</div>
        <p className="about-text anim-fade-up delay-1">
  I am a bilingual digital content producer with over six years of experience
  in network news, producing and editing for digital platforms and social media
  strategy. Skilled in breaking news coverage, editorial writing, field reporting
  and multimedia storytelling across platforms.{" "}
  <span style={{ whiteSpace: "nowrap" }}>I have</span> produced an award-winning
  short documentary and worked with top-tier national networks like CNBC, MSNBC
  and local news with NJ Spotlight News. Fluent in English and Spanish, with deep
  expertise in Adobe Premiere, AP Style and cross-platform digital journalism.
</p>
          {/* Skills row */}
          <div className="anim-fade-up delay-2" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 32 }}>
            {['Adobe Premiere','AP Style','Breaking News','SEO','Social Media','Video Production','Bilingual (EN/ES)','Field Reporting','Copy Editing','CMS / WordPress'].map(skill => (
              <span key={skill} style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.68rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                background: 'var(--ink)',
                color: 'var(--white)',
                padding: '5px 12px',
                border: '1px solid var(--ink)',
              }}>{skill}</span>
            ))}
          </div>
        </section>

        <div className="rule-thin" />

        {/* ── PORTFOLIO ────────────────────────────────── */}
        <section id="portfolio" style={{ padding: '64px 0 56px' }}>
          <div className="section-label anim-reveal">Portfolio / Work Samples</div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* NJ Spotlight */}
            <div className="feature-card anim-fade-up delay-1">
              <img src="/images/NJlogo.png" alt="NJ Spotlight News" className="feature-card-img" />
              <div className="feature-card-body">
                <div style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 8 }}>2021 – Present</div>
                <h2 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '1.4rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 10, lineHeight: 1.2 }}>NJ Spotlight News</h2>
                <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '0.88rem', color: 'var(--ink-light)', lineHeight: 1.75, marginBottom: 20 }}>
                  Digital Content Associate producing, editing and publishing breaking news stories, multimedia features and social media content across YouTube, Instagram and TikTok.
                </p>
                <Link href="/njspotlight" className="btn-primary">View All Work →</Link>
              </div>
            </div>

            {/* CNBC */}
            <div className="feature-card anim-fade-up delay-2">
              <img src="/images/CNBC.png" alt="CNBC" className="feature-card-img" />
              <div className="feature-card-body">
                <div style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 8 }}>Summer 2019</div>
                <h2 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '1.4rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 10, lineHeight: 1.2 }}>CNBC</h2>
                <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '0.88rem', color: 'var(--ink-light)', lineHeight: 1.75, marginBottom: 20 }}>
                  Digital Video Intern producing and editing short-form video for CNBC.com and social platforms. Wrote scripts, conducted research and ensured editorial accuracy for national audiences.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  <a href="https://www.cnbc.com/genesis-obando/" target="_blank" rel="noreferrer" className="btn-primary">Watch Videos →</a>
                  <a href="https://www.cnbc.com/video/2019/07/31/wedding-loans-how-they-work-and-why-more-couples-are-using-them.html" target="_blank" rel="noreferrer" className="btn-outline">Watch "How Wedding Loans Work"</a>
                </div>
              </div>
            </div>

            {/* Puerto Rico */}
            <div className="feature-card anim-fade-up delay-3">
              <img src="/images/PR.png" alt="Mission to Puerto Rico" className="feature-card-img" />
              <div className="feature-card-body">
                <div style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 8 }}>Award-Winning Documentary · 2018</div>
                <h2 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '1.4rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 10, lineHeight: 1.2 }}>Mission to Puerto Rico — "Open for Business"</h2>
                <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '0.88rem', color: 'var(--ink-light)', lineHeight: 1.75, marginBottom: 16 }}>
                  Produced award-winning short documentary on Hurricane Maria aftermath — handling research, reporting, interviews, camera/audio work and editing. Also translated, produced and edited the film in Spanish.
                </p>
                {/* Awards */}
                <div style={{ marginBottom: 20, borderTop: '1px solid var(--rule-thin)', paddingTop: 14 }}>
                  {['2019 College Television Award — News Category','2019 Seymour Bricker Humanitarian Award','2019 Student Edward R. Murrow Award'].map(a => (
                    <div key={a} className="award-item">
                      <span className="award-star">★</span>
                      <span style={{ fontFamily: "'DM Sans', sans-serif" }}>{a}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  <Link href="/puerto-rico/video-english" className="btn-primary">Watch Film →</Link>
                  <Link href="/puerto-rico/video-spanish" className="btn-outline">Spanish Version</Link>
                  <Link href="/puerto-rico/photos" className="btn-outline">Award Photos</Link>
                </div>
              </div>
            </div>

          </div>
        </section>

        <div className="rule-thin" />

        {/* ── RESUME ──────────────────────────────────── */}
        <section id="resume" style={{ padding: '64px 0 56px' }}>
          <div className="section-label anim-reveal">Resume</div>
          <div className="anim-fade-up delay-1" style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
            <div>
              <h2 style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>Genesis Obando</h2>
              <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontStyle: 'italic', color: 'var(--ink-light)', fontSize: '0.9rem', marginBottom: 20 }}>
                Digital Content Producer · NBCUniversal · NJ Spotlight News · Montclair State University, B.A. Journalism
              </p>
              <a href="/Genesis-Obando-resume.docx.pdf" target="_blank" rel="noreferrer" className="btn-primary">
                Download Full Resume (PDF) →
              </a>
            </div>
          </div>
        </section>

        <div className="rule-thin" />

        {/* ── CONTACT ─────────────────────────────────── */}
        <section id="contact" style={{ padding: '64px 0 72px' }}>
          <div className="section-label anim-reveal">Contact</div>
          <div className="anim-fade-up delay-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32 }}>
            <div>
              <div style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 6 }}>Email</div>
              <a href="mailto:obandogenesis@gmail.com" style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '1rem', color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--rule-thin)' }}>
                obandogenesis@gmail.com
              </a>
            </div>
            <div>
              <div style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 6 }}>LinkedIn</div>
              <a href="https://linkedin.com/in/genesis-obando" target="_blank" rel="noreferrer" style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '1rem', color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--rule-thin)' }}>
                linkedin.com/in/genesis-obando
              </a>
            </div>
            <div>
              <div style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 6 }}>Based In</div>
              <p style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '1rem', color: 'var(--ink)' }}>Newark, NJ / New York, NY</p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
