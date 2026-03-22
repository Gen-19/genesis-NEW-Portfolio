import SubPageLayout from '../../../components/SubPageLayout'

export const metadata = { title: 'Open for Business | Genesis Obando' }

export default function PRVideoEnglish() {
  return (
    <SubPageLayout title="Open for Business" backHref="/#portfolio" backLabel="Back to Portfolio">
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/U0alXbQWEZ8?si=qnuV1XUrkSMLOFA9"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </SubPageLayout>
  )
}
