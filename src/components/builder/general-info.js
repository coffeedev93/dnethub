import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Textarea } from "@/src/components/ui/textarea"

export default function GeneralInfo({ info, setInfo }) {
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">General Information</h3>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" value={info.name} onChange={handleChange} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" value={info.title} onChange={handleChange} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea id="bio" name="bio" value={info.bio} onChange={handleChange} />
      </div>
    </div>
  )
}