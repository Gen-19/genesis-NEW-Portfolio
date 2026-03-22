import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const metadata = { title: 'NJ Spotlight News Work | Genesis Obando' }

const articles = [
  { img: '/images/njspotlight-storybook-reel.png', label: 'Instagram Reel', title: "Children's storybook segment", desc: 'Produced and edited this Instagram reel featuring a storybook read for NJ Spotlight News.', links: [{ href: '/njspotlight/storybook-ig', label: 'Watch Reel' }] },
  { img: '/images/njspotlight-ice-post.png', label: 'Instagram', title: 'ICE action coverage', desc: 'Produced and edited this Instagram post on location for NJ Spotlight News.', links: [{ href: '/njspotlight/ice-ig', label: 'View Post' }] },
  { img: '/images/gateway-story.png', label: 'Reporting', title: 'Gateway is a pain — for now', desc: 'Reported and wrote this story on the Gateway Program and how it will affect travelers.', links: [{ href: 'https://www.njspotlightnews.org/2026/02/gateway-is-a-pain-for-now-heres-how-it-will-make-your-life-better/', label: 'Full Story ↗', external: true }] },
  { img: '/images/gas-tax-pump.png', label: 'Reporting · Explainer', title: 'NJ gas tax & tolls', desc: 'Reported and wrote on toll and gas tax changes in 2026, and a separate explainer on how the gas tax works and why it changes.', links: [{ href: 'https://www.njspotlightnews.org/2026/01/nj-tolls-gas-tax-increased-in-2026-heres-what-to-know/', label: '2026: what to know ↗', external: true }, { href: 'https://www.njspotlightnews.org/2025/12/what-is-njs-gas-tax-why-is-it-increasing/', label: "What is NJ's gas tax? ↗", external: true }] },
  { img: '/images/sherrill.png', label: 'Instagram Reel', title: 'Get to know Gov.-elect Mikie Sherrill', desc: 'Produced and edited this video on Gov.-elect Mikie Sherrill for Instagram.', links: [{ href: '/njspotlight/sherrill-ig', label: 'Watch Reel' }] },
  { img: '/images/duck.png', label: 'YouTube · Instagram · TikTok', title: 'Lame-duck session: What it is and what NJ lawmakers do during it', desc: 'Voiced this explainer video across three platforms.', links: [{ href: '/njspotlight/lameduck-yt', label: 'YouTube' }, { href: '/njspotlight/lameduck-ig', label: 'Instagram' }, { href: '/njspotlight/lameduck-tt', label: 'TikTok' }] },
  { img: '/images/gunsdownglovesup.jpg', label: 'YouTube · Instagram', title: "Guns Down, Gloves Up", desc: 'Produced and edited a video for a digital story on the Guns Down, Gloves Up summer boxing program.', links: [{ href: '/njspotlight/gunsdown-yt', label: 'YouTube' }, { href: '/njspotlight/gunsdown-ig', label: 'Instagram' }, { href: 'https://www.njspotlightnews.org/special-report/trenton-guns-down-gloves-up-program-teaches-boxing-skills-fights-gun-violence/', label: 'Full Story ↗', external: true }] },
  { img: '/images/Voter.png', label: 'YouTube · Instagram · TikTok', title: 'NJ Spotlight News voter guide', desc: 'Produced and edited this explainer video for Instagram, TikTok and YouTube.', links: [{ href: '/njspotlight/votersguide-yt', label: 'YouTube' }, { href: '/njspotlight/votersguide-ig', label: 'Instagram' }, { href: '/njspotlight/votersguide-tt', label: 'TikTok' }] },
  { img: '/images/harm.jpg', label: 'Digital Story', title: 'Harm Reduction', desc: 'Produced and edited a video on harm reduction for a digital story.', links: [{ href: 'https://www.njspotlightnews.org/2024/09/integrity-house-newark-expands-harm-reduction-services-focus-people-unwilling-unable-stop-drug-use/', label: 'Full Story ↗', external: true }] },
  { img: '/images/domestic.png', label: 'Instagram Reel', title: 'Interview on alleged domestic abuse', desc: 'Edited this interview that originally aired on broadcast for Instagram.', links: [{ href: '/njspotlight/domestic-ig', label: 'Watch Reel' }] },
  { img: '/images/partycity.png', label: 'Instagram · TikTok', title: 'Party City employees', desc: 'Edited this segment that originally aired on broadcast for Instagram and TikTok.', links: [{ href: '/njspotlight/partycity-ig', label: 'Instagram' }, { href: '/njspotlight/partycity-tt', label: 'TikTok' }] },
  { img: '/images/cancer.png', label: 'Instagram · TikTok', title: 'Breast Cancer awareness', desc: 'Pitched this interview for broadcast, then edited for Instagram and TikTok.', links: [{ href: '/njspotlight/cancer-ig', label: 'Instagram' }, { href: '/njspotlight/cancer-tt', label: 'TikTok' }] },
  { img: '/images/doingwhat.png', label: 'Interactive Feature', title: "Here's who's doing what in the Trump administration", desc: "Helped write and build this page on President Donald Trump's cabinet.", links: [{ href: 'https://www.njspotlightnews.org/special-report/how-trump-cabinet-choices-can-impact-new-jersey/', label: 'Full Story ↗', external: true }] },
  { img: '/images/charts.png', label: 'Data Journalism', title: 'Charting the white male dominance of NJ boards and commissions', desc: 'Wrote and created charts for this story on diversity gaps.', links: [{ href: 'https://www.njspotlightnews.org/2023/11/ts-show-white-male-dominance-nj-boards-commissions-cawp-report/', label: 'Full Story ↗', external: true }] },
  { img: '/images/homelessness.png', label: 'Data Journalism', title: "What's driving homelessness in New Jersey?", desc: 'Wrote and created charts for this story on homelessness in NJ.', links: [{ href: 'https://www.njspotlightnews.org/2023/08/10000-plus-people-homeless-nj/', label: 'Full Story ↗', external: true }] },
  { img: '/images/medianage.png', label: 'Data Journalism', title: 'US median age is now 39. NJ is over 40', desc: 'Wrote and created charts for this story on age demographics.', links: [{ href: 'https://www.njspotlightnews.org/2023/06/us-median-age-increases-nj-median-age-also-ticks-higher/', label: 'Full Story ↗', external: true }] },
  { img: '/images/bullying.jpg', label: 'Explainer', title: "NJ's anti-bullying laws throughout the years", desc: "Wrote this explainer on NJ's anti-bullying laws.", links: [{ href: 'https://www.njspotlightnews.org/2023/02/mallory-grossman-mallorys-law-rutgers-university-tyler-clementi-harassment-intimidation-cyberbullying-anti-bullying-bill-of-rights/', label: 'Full Story ↗', external: true }] },
  { img: '/images/wardrugs.jpg', label: 'Infographic', title: 'NJ spent billions on failed drug war, new report says', desc: "Created an infographic for a story on the impact of New Jersey's war on drugs.", links: [{ href: 'https://www.njspotlightnews.org/2021/06/njpp-report-nj-spent-billions-fighting-illegal-drug-use-expensive-ineffective-racially-discriminatory-war/', label: 'Full Story ↗', external: true }] },
  { img: '/images/electionmiss.jpg', label: 'Reporting', title: 'Misleading messages to Mendham voters follow nationwide trend of election misinformation', desc: 'Reported and wrote this story on misinformation during the 2020 election.', links: [{ href: 'https://www.njspotlightnews.org/2020/10/nj-election-2020-mendham-borough-voters-sent-misleading-information-republican-committee-blamed/', label: 'Full Story ↗', external: true }] },
  { img: '/images/latinvoters.jpg', label: 'Reporting', title: "In NJ's all-mail election, Black and Latino voters have doubts but are still casting ballots", desc: 'Reported and wrote this story on Black and Latino voters during the 2020 election.', links: [{ href: 'https://www.njspotlightnews.org/2020/10/in-njs-all-mail-election-black-and-latino-voters-have-doubts-but-are-still-casting-ballots/', label: 'Full Story ↗', external: true }] },
]

export default function NJSpotlight() {
  return (
    <>
      {/* Sub-page header */}
      <div className="subpage-header">
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>
          <div className="subpage-breadcrumb">
            <Link href="/">Home</Link> <span style={{ opacity: 0.4 }}>›</span> Portfolio
          </div>
          <h1 className="subpage-title">NJ Spotlight News</h1>
          <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontStyle: 'italic', color: 'rgba(255,255,255,0.55)', marginTop: 10, fontSize: '0.9rem' }}>
            A curated collection of digital journalism, social media production and multimedia storytelling.
          </p>
        </div>
      </div>
      <div className="rule-gold" />

      <Navbar />

      <main style={{ maxWidth: 1000, margin: '0 auto', padding: '56px 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 22 }}>
          {articles.map((article, i) => {
            const first = article.links[0]
            const imgEl = (
              <img src={article.img} alt={article.title} className="work-card-img"
                onError={undefined}
                style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block', background: '#ede7d9' }} />
            )
            return (
            <div key={article.title} className="work-card anim-fade-up" style={{ animationDelay: `${(i % 8) * 0.06}s` }}>
              {first.external ? (
                <a href={first.href} target="_blank" rel="noopener noreferrer" className="work-card-img-link" aria-label={`Open: ${article.title}`}>
                  {imgEl}
                </a>
              ) : (
                <Link href={first.href} className="work-card-img-link" aria-label={`View: ${article.title}`}>
                  {imgEl}
                </Link>
              )}
              <div className="work-card-body">
                <div className="work-card-label">{article.label}</div>
                <h3 className="work-card-title">{article.title}</h3>
                <p className="work-card-desc">{article.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 'auto' }}>
                  {article.links.map((l, li) => (
                    <Link key={l.label} href={l.href}
                      target={l.external ? '_blank' : undefined}
                      rel={l.external ? 'noreferrer' : undefined}
                      className={li === 0 ? 'btn-primary' : 'btn-outline'}
                      style={{ fontSize: '0.65rem', padding: '7px 12px' }}>
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            )
          })}
        </div>

        <div style={{ marginTop: 56, paddingTop: 32, borderTop: '1px solid var(--rule-thin)' }}>
          <Link href="/#portfolio" className="btn-outline">← Back to Portfolio</Link>
        </div>
      </main>

      <Footer />
    </>
  )
}
