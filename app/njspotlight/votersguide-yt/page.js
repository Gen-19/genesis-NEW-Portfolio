import SubPageLayout from '../../../components/SubPageLayout'

export const metadata = { title: 'NJ Voter Guide (YouTube) | Genesis Obando' }

export default function VotersGuideYT() {
  return (
    <SubPageLayout title="NJ election 2025: Who's running for governor, Assembly? A guide for voters" backHref="/njspotlight" backLabel="Back to NJ Spotlight News">
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/NS0Urcsqy6E?si=ftw22rqe0qIaVCjE"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </SubPageLayout>
  )
}
