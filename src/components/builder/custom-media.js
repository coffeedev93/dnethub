import { useState } from 'react'
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Button } from "@/src/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"


const platforms = ['Twitter', 'YouTube']

export default function CustomMediaLinks({ links, setLinks }) {
  const [title, setTitle] = useState('')
  const [username, setUsername] = useState('')
  const [link, setLink] = useState('')
  const [platform, setPlatform] = useState('')

  const handleAddLink = () => {
    if (title && username && link && platform) {
      setLinks([...links, { title, username, link, platform }])
      setTitle('')
      setUsername('')
      setLink('')
      setPlatform('')
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Custom Media Links</h3>
      <div className="space-y-2">
        <Label htmlFor="mediaTitle">Title</Label>
        <Input 
          id="mediaTitle" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter media title"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="mediaUsername">Username</Label>
        <Input 
          id="mediaUsername" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="mediaLink">Link</Label>
        <Input 
          id="mediaLink" 
          value={link} 
          onChange={(e) => setLink(e.target.value)}
          placeholder="Enter media link"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="mediaPlatform">Platform</Label>
        <Select value={platform} onValueChange={setPlatform}>
          <SelectTrigger>
            <SelectValue placeholder="Select platform" />
          </SelectTrigger>
          <SelectContent>
            {platforms.map((p) => (
              <SelectItem key={p} value={p}>{p}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button onClick={handleAddLink}>Add Media Link</Button>
      {links.map((item, index) => (
        <div key={index} className="p-2 border rounded">
          <p><strong>Title:</strong> {item.title}</p>
          <p><strong>Username:</strong> {item.username}</p>
          <p><strong>Link:</strong> {item.link}</p>
          <p><strong>Platform:</strong> {item.platform}</p>
        </div>
      ))}
    </div>
  )
}