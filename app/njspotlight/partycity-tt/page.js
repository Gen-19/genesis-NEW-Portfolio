import SubPageLayout from '../../../components/SubPageLayout'

export const metadata = { title: 'Party City Layoffs (TikTok) | Genesis Obando' }

export default function PartyCityTT() {
  return (
    <SubPageLayout title="Party City layoffs — TikTok" backHref="/njspotlight" backLabel="Back to NJ Spotlight News">
      <div className="flex justify-center">
        <blockquote
          className="tiktok-embed"
          cite="https://www.tiktok.com/@njspotlightnews/video/7455808282892963114"
          data-video-id="7455808282892963114"
          style={{ maxWidth: 605, minWidth: 325 }}
        >
          <section>
            <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@njspotlightnews?refer=embed">@njspotlightnews</a>
            {' '}Some former employees of Party City are suing the company after it announced on Dec. 20 that it was filing for bankruptcy and instituting layoffs the same day.{' '}
            <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/music/original-sound-7455808286395534122?refer=embed">♬ original sound - NJ Spotlight News</a>
          </section>
        </blockquote>
        <script async src="https://www.tiktok.com/embed.js" />
      </div>
    </SubPageLayout>
  )
}
