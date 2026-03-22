import InstagramEmbed from '../../../components/InstagramEmbed'
import SubPageLayout from '../../../components/SubPageLayout'

export const metadata = { title: 'Gov.-elect Mikie Sherrill | Genesis Obando' }

export default function SherrillIG() {
  return (
    <SubPageLayout title="Get to know Gov.-elect Mikie Sherrill" backHref="/njspotlight" backLabel="Back to NJ Spotlight News">
      <InstagramEmbed permalink="https://www.instagram.com/reel/DQsI49klCKP/?utm_source=ig_embed&utm_campaign=loading" />
    </SubPageLayout>
  )
}
