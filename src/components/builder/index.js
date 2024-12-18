'use client'

import { useState } from 'react'
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card"
import GeneralInfo from './general-info'
import SocialLinks from './social-links'
import WalletAddresses from './wallet-addresses'
import CustomMediaLinks from './custom-media'
import SectionCard from '../common/section-card'
import Analytics from './analytics'


export default function ProfileBuilder({ buttonText = "Update Profile" }) {
  const [generalInfo, setGeneralInfo] = useState({ name: '', title: '', bio: '' })
  const [socialLinks, setSocialLinks] = useState({
    twitter: '', telegram: '', discord: '', youtube: '', medium: ''
  })
  const [walletAddresses, setWalletAddresses] = useState([])
  const [customMediaLinks, setCustomMediaLinks] = useState([])
  const [hasAnalytics, setHasAnalytics] = useState(false)

  const handleSubmit = () => {
    const profileData = {
      generalInfo,
      socialLinks,
      walletAddresses,
      customMediaLinks,
	  hasAnalytics
    }
    console.log(JSON.stringify(profileData, null, 2))
    // Here you would typically send this data to your backend
  }


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
		<SectionCard>
			<Analytics active={hasAnalytics} activateAnalytics={setHasAnalytics} />
		</SectionCard>

        <div className="mb-4">
            <Button onClick={handleSubmit} className="w-full">{buttonText}</Button>
        </div>
    </div>
  )
}