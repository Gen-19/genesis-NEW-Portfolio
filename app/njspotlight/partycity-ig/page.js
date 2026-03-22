import InstagramEmbed from '../../../components/InstagramEmbed'
import SubPageLayout from '../../../components/SubPageLayout'

export const metadata = { title: 'Party City Layoffs (Instagram) | Genesis Obando' }

export default function PartyCityIG() {
  return (
    <SubPageLayout title="Party City layoffs — Instagram Reel" backHref="/njspotlight" backLabel="Back to NJ Spotlight News">
      <InstagramEmbed permalink="https://www.instagram.com/reel/DEZ4mDYJYPR/?utm_source=ig_embed&utm_campaign=loading" />
    </SubPageLayout>
  )
}
