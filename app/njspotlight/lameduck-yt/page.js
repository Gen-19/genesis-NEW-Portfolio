import SubPageLayout from '../../../components/SubPageLayout'

export const metadata = { title: 'Lame-duck session (YouTube) | Genesis Obando' }

export default function LameduckYT() {
  return (
    <SubPageLayout title="Lame-duck session: What it is and what NJ lawmakers do during it" backHref="/njspotlight" backLabel="Back to NJ Spotlight News">
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/Kw9fq3GKQH8?si=hNsgQq8FpNKlapoH"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </SubPageLayout>
  )
}
