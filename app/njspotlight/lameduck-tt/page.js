import SubPageLayout from '../../../components/SubPageLayout'

export const metadata = { title: 'Lame-duck session (TikTok) | Genesis Obando' }

export default function LameduckTT() {
  return (
    <SubPageLayout title="Lame-duck session (TikTok)" backHref="/njspotlight" backLabel="Back to NJ Spotlight News">
      <div className="flex justify-center">
        <blockquote
          className="tiktok-embed"
          cite="https://www.tiktok.com/@njspotlightnews/video/7313985493530643755"
          data-video-id="7313985493530643755"
          style={{ maxWidth: 605, minWidth: 325 }}
        >
          <section>
            <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@njspotlightnews?refer=embed">@njspotlightnews</a>
            {' '}For most people, this time of year is the holiday season. For members of the NJ Legislature, it's also time for a lame-duck session.{' '}
            <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/music/original-sound-7313985580977638187?refer=embed">♬ original sound - NJ Spotlight News</a>
          </section>
        </blockquote>
        <script async src="https://www.tiktok.com/embed.js" />
      </div>
    </SubPageLayout>
  )
}
