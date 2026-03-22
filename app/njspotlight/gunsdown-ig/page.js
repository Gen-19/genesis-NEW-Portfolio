import InstagramEmbed from '../../../components/InstagramEmbed'
import SubPageLayout from '../../../components/SubPageLayout'

export const metadata = { title: "Guns Down, Gloves Up (Instagram) | Genesis Obando" }

export default function GunsdownIG() {
  return (
    <SubPageLayout title="Guns Down, Gloves Up Instagram Reel" backHref="/njspotlight" backLabel="Back to NJ Spotlight News">
      <InstagramEmbed permalink="https://www.instagram.com/reel/C_F_yawicBx/" />
    </SubPageLayout>
  )
}
