import InstagramEmbed from '../../../components/InstagramEmbed'
import SubPageLayout from '../../../components/SubPageLayout'

export const metadata = { title: 'ICE coverage (Instagram) | Genesis Obando' }

export default function IceIG() {
  return (
    <SubPageLayout
      title="ICE action — Instagram post"
      backHref="/njspotlight"
      backLabel="Back to NJ Spotlight News"
    >
      <InstagramEmbed permalink="https://www.instagram.com/p/DUEeOVNjKkP/?utm_source=ig_embed&utm_campaign=loading" />
    </SubPageLayout>
  )
}
