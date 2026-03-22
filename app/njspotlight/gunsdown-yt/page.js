import SubPageLayout from '../../../components/SubPageLayout'

export const metadata = { title: "Guns Down, Gloves Up (YouTube) | Genesis Obando" }

export default function GunsdownYT() {
  return (
    <SubPageLayout title="'Guns Down, Gloves Up' boxing program aims to end gun violence in Trenton" backHref="/njspotlight" backLabel="Back to NJ Spotlight News">
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/f34IiVo_7sI?si=rwm-o60YFEefoDYZ"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </SubPageLayout>
  )
}
