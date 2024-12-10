import { IconCircle3, IconCircleX, IconDrone } from "@tabler/icons-react"
import { cn } from "@/src/lib/utils"
import Link from "next/link"
import { useState } from "react"

export default function LandingNav({ items, siteName, children }) {
    const segment = "nosegment" //useSelectedLayoutSegment()
    const [showMobileMenu, setShowMobileMenu] = useState(false)
  
    return (
      <div className="flex gap-6 md:gap-10">
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <IconDrone />
          <span className="hidden font-bold sm:inline-block">
            {siteName}
          </span>
        </Link>
        {items?.length ? (
          <nav className="hidden gap-6 md:flex">
            {items?.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                  item.href.startsWith(`/${segment}`)
                    ? "text-foreground"
                    : "text-foreground/60",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        ) : null}
        <button
          className="flex items-center space-x-2 md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <IconCircleX /> : <IconDrone />}
          <span className="font-bold">Menu</span>
        </button>
        {showMobileMenu && items && (
          <MobileNav items={items}>{children}</MobileNav>
        )}
      </div>
    )
  }