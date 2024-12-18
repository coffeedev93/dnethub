'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/src/components/ui/button"
import GeneralInfo from './general-info'
import SocialLinks from './social-links'
import WalletAddresses from './wallet-addresses'
import CustomMediaLinks from './custom-media'
import SectionCard from '../common/section-card'
import Analytics from './analytics'
import { updateDomainData } from '@/src/service'
import { useApp } from '@/src/context'

const defaultData = {
	generalInfo: { name: '', title: '', bio: '' },
	socialLinks: {
		twitter: '', telegram: '', discord: '', youtube: '', medium: ''
	}
}

export default function ProfileBuilder({ 
	domain,
	data = {}, 
	buttonText = "Update Profile" 
}) {
  const [generalInfo, setGeneralInfo] = useState(defaultData.generalInfo)
  const [socialLinks, setSocialLinks] = useState(defaultData.socialLinks)
  const [walletAddresses, setWalletAddresses] = useState([])
  const [customMediaLinks, setCustomMediaLinks] = useState([])
  const [hasAnalytics, setHasAnalytics] = useState(false)

  const { fn: { setLoaderMessage } } = useApp();

  useEffect(() => {
	if (Object.keys(data).length > 0) {
		if (data.generalInfo) setGeneralInfo(data.generalInfo);
		if (data.socialLinks) setSocialLinks(data.socialLinks);
		if (data.walletAddresses) setWalletAddresses(data.walletAddresses);
		if (data.customMediaLinks) setCustomMediaLinks(data.customMediaLinks);
		if (data.hasAnalytics) setHasAnalytics(data.hasAnalytics); 
	}
  }, [data])

  const handleSubmit = async () => {
		const profileData = {
			generalInfo,
			socialLinks,
			walletAddresses,
			customMediaLinks,
			hasAnalytics
		}

		// validate general info
		if(
			generalInfo.name === "" ||
			generalInfo.title === "" ||
			generalInfo.bio === ""
		) {
			alert("Please complete the general info")
			return;
		}

		setLoaderMessage("Updating values...")
		const result = await updateDomainData({
			domain,
			data: profileData,
			theme: null
		});
		setLoaderMessage(null)

		if (result.error) {
			alert("There was an error while updating!")
		}
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