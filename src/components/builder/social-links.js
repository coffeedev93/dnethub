import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"

const socialPlatforms = ['twitter', 'telegram', 'discord', 'youtube', 'medium']

export default function SocialLinks({ links, setLinks }) {
  const handleChange = (e) => {
    setLinks({ ...links, [e.target.name]: e.target.value })
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Social Links</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {socialPlatforms.map((platform) => (
            <div key={platform} className="space-y-2">
            <Label htmlFor={platform}>{platform.charAt(0).toUpperCase() + platform.slice(1)}</Label>
            <Input 
                id={platform} 
                name={platform} 
                value={links[platform]} 
                onChange={handleChange}
                placeholder={`Enter your ${platform} profile URL`}
            />
            </div>
        ))}
      </div>
    </div>
  )
}