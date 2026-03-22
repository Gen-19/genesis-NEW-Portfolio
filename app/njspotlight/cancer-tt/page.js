import SubPageLayout from '../../../components/SubPageLayout'

export const metadata = { title: 'Breast Cancer Awareness (TikTok) | Genesis Obando' }

export default function CancerTT() {
  return (
    <SubPageLayout title="Breast Cancer Awareness — TikTok" backHref="/njspotlight" backLabel="Back to NJ Spotlight News">
      <div className="flex justify-center">
        <blockquote
          className="tiktok-embed"
          cite="https://www.tiktok.com/@njspotlightnews/video/7429058846783573279"
          data-video-id="7429058846783573279"
          style={{ maxWidth: 605, minWidth: 325 }}
        >
          <section>
            <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@njspotlightnews?refer=embed">@njspotlightnews</a>
            {' '}October is Breast Cancer Awareness Month. Earlier this year, Alanna Vizzoni, a 27-year-old Hoboken resident, was stunned when she was diagnosed with Stage II invasive ductal carcinoma breast cancer.{' '}
            <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/music/original-sound-7429058735450622750?refer=embed">♬ original sound - NJ Spotlight News</a>
          </section>
        </blockquote>
        <script async src="https://www.tiktok.com/embed.js" />
      </div>
    </SubPageLayout>
  )
}
