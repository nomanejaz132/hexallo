import { Link } from "react-router-dom"
import { primaryNav } from "@/data/navigation"

interface MobileMenuProps {
  isOpen: boolean
}

export default function MobileMenu({ isOpen }: MobileMenuProps) {
  if (!isOpen) return null
  
  return (
    <nav className="flex flex-col gap-4 bg-[#2e251e] p-4 xl:hidden text-white">
      {primaryNav.map((item) => (
        <Link key={item} to="#" className="font-medium hover:text-[#C5A059]">
          {item}
        </Link>
      ))}
    </nav>
  )
}
