'use client'

import { useState } from 'react'
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card"
import GeneralInfo from './general-info'
import SocialLinks from './social-links'
import WalletAddresses from './wallet-addresses'
import CustomMediaLinks from './custom-media'
import SectionCard from '../common/section-card'


export default function ProfileBuilder() {
  const [generalInfo, setGeneralInfo] = useState({ name: '', title: '', bio: '' })
  const [socialLinks, setSocialLinks] = useState({
    twitter: '', telegram: '', discord: '', youtube: '', medium: ''
  })
  const [walletAddresses, setWalletAddresses] = useState([])
  const [customMediaLinks, setCustomMediaLinks] = useState([])

  const handleSubmit = () => {
    const profileData = {
      generalInfo,
      socialLinks,
      walletAddresses,
      customMediaLinks
    }
    console.log(JSON.stringify(profileData, null, 2))
    // Here you would typically send this data to your backend
  }

//   return (
//     <Card className="w-full max-w-3xl mx-auto mt-4">
//       <CardHeader>
//         <CardTitle>Profile Builder</CardTitle>
//       </CardHeader>
//       <CardContent className="space-y-6">
//         <GeneralInfo info={generalInfo} setInfo={setGeneralInfo} />
//         <SocialLinks links={socialLinks} setLinks={setSocialLinks} />
//         <WalletAddresses addresses={walletAddresses} setAddresses={setWalletAddresses} />
//         <CustomMediaLinks links={customMediaLinks} setLinks={setCustomMediaLinks} />
//       </CardContent>
//       <CardFooter>
//         <Button onClick={handleSubmit} className="w-full">Generate Profile</Button>
//       </CardFooter>
//     </Card>
//   )

  return (
    <div className="w-full mx-auto mt-4">
        <SectionCard>
            <GeneralInfo info={generalInfo} setInfo={setGeneralInfo} />
        </SectionCard>
        <SectionCard>
            <SocialLinks links={socialLinks} setLinks={setSocialLinks} />
        </SectionCard>
        <SectionCard>
            <WalletAddresses addresses={walletAddresses} setAddresses={setWalletAddresses} />
        </SectionCard>
        <SectionCard>
            <CustomMediaLinks links={customMediaLinks} setLinks={setCustomMediaLinks} />
        </SectionCard>

        <div className="mb-4">
            <Button onClick={handleSubmit} className="w-full">Generate Profile</Button>
        </div>
    </div>
  )
}