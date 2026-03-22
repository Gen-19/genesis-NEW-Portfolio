import SubPageLayout from '../../../components/SubPageLayout'

export const metadata = { title: 'Nuevos Comienzos | Genesis Obando' }

export default function PRVideoSpanish() {
  return (
    <SubPageLayout title="Nuevos Comienzos — New Beginnings" backHref="/#portfolio" backLabel="Back to Portfolio">
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/gdEHfHKokeQ?si=8OpswEfB8UOT2RLv"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </SubPageLayout>
  )
}
