import InstagramEmbed from '../../../components/InstagramEmbed'
import SubPageLayout from '../../../components/SubPageLayout'

export const metadata = { title: 'Lame-duck session (Instagram) | Genesis Obando' }

export default function LameduckIG() {
  return (
    <SubPageLayout title="Lame-duck session: What it is and what NJ lawmakers do during it" backHref="/njspotlight" backLabel="Back to NJ Spotlight News">
      <InstagramEmbed permalink="https://www.instagram.com/reel/C0-WPGzIUf-/?utm_source=ig_embed&utm_campaign=loading" />
    </SubPageLayout>
  )
}
