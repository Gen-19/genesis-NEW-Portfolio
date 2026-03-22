import SubPageLayout from '../../../components/SubPageLayout'

export const metadata = { title: 'NJ Voter Guide (TikTok) | Genesis Obando' }

export default function VotersGuideTT() {
  return (
    <SubPageLayout title="NJ Spotlight News voter guide — TikTok" backHref="/njspotlight" backLabel="Back to NJ Spotlight News">
      <div className="flex justify-center">
        <blockquote
          className="tiktok-embed"
          cite="https://www.tiktok.com/@njspotlightnews/video/7552956697308957965"
          data-video-id="7552956697308957965"
          style={{ maxWidth: 605, minWidth: 325 }}
        >
          <section>
            <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@njspotlightnews?refer=embed">@njspotlightnews</a>
            {' '}New Jersey, Election Day is Nov. 4! Do you know who you're voting for? We've got you covered.{' '}
            <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/music/original-sound-7552962008061774606?refer=embed">♬ original sound - NJ Spotlight News</a>
          </section>
        </blockquote>
        <script async src="https://www.tiktok.com/embed.js" />
      </div>
    </SubPageLayout>
  )
}
