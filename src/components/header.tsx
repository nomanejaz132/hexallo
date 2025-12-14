import { useState } from "react"
import TopBar from "./header-top-bar"
import MainHeader from "./header-main"
import SubHeader from "./header-sub"
import MobileMenu from "./header-mobile-menu"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab] = useState("home")

  return (
    <header className="flex flex-col w-full font-sans">
      <TopBar />
      <MainHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      <SubHeader activeTab={activeTab} />
      <MobileMenu isOpen={isOpen} />
    </header>
  )
}
