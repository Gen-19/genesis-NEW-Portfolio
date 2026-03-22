import InstagramEmbed from '../../../components/InstagramEmbed'
import SubPageLayout from '../../../components/SubPageLayout'

export const metadata = { title: 'Breast Cancer Awareness (Instagram) | Genesis Obando' }

export default function CancerIG() {
  return (
    <SubPageLayout title="Breast Cancer Awareness — Instagram Reel" backHref="/njspotlight" backLabel="Back to NJ Spotlight News">
      <InstagramEmbed permalink="https://www.instagram.com/reel/DBoG-Y_MJ4z/?utm_source=ig_embed&utm_campaign=loading" />
    </SubPageLayout>
  )
}
