import InstagramEmbed from '../../../components/InstagramEmbed'
import SubPageLayout from '../../../components/SubPageLayout'

export const metadata = { title: 'NJ Voter Guide (Instagram) | Genesis Obando' }

export default function VotersGuideIG() {
  return (
    <SubPageLayout title="NJ Spotlight News voter guide — Instagram Reel" backHref="/njspotlight" backLabel="Back to NJ Spotlight News">
      <InstagramEmbed permalink="https://www.instagram.com/reel/DO6HjTJDub-/?utm_source=ig_embed&utm_campaign=loading" />
    </SubPageLayout>
  )
}
