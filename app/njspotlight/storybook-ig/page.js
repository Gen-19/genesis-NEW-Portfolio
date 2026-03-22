import InstagramEmbed from '../../../components/InstagramEmbed'
import SubPageLayout from '../../../components/SubPageLayout'

export const metadata = { title: "Children's storybook segment (Instagram) | Genesis Obando" }

export default function StorybookIG() {
  return (
    <SubPageLayout
      title="Children's storybook — Instagram Reel"
      backHref="/njspotlight"
      backLabel="Back to NJ Spotlight News"
    >
      <InstagramEmbed permalink="https://www.instagram.com/reel/DVD6Nw7CQeU/?utm_source=ig_embed&utm_campaign=loading" />
    </SubPageLayout>
  )
}
