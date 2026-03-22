import InstagramEmbed from '../../../components/InstagramEmbed'
import SubPageLayout from '../../../components/SubPageLayout'

export const metadata = { title: 'Alleged Domestic Abuse (Instagram) | Genesis Obando' }

export default function DomesticIG() {
  return (
    <SubPageLayout title="Alleged domestic abuse story — Instagram Reel" backHref="/njspotlight" backLabel="Back to NJ Spotlight News">
      <InstagramEmbed permalink="https://www.instagram.com/reel/DNlunSnvPN4/?utm_source=ig_embed&utm_campaign=loading" />
    </SubPageLayout>
  )
}
