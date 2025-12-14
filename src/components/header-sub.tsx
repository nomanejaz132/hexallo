import { Link } from "react-router-dom"
import { secondaryNav } from "@/data/navigation"

interface SubHeaderProps {
  activeTab: string
}

export default function SubHeader({ activeTab }: SubHeaderProps) {
  return (
    <div className="w-full h-[37px] bg-[#F8F8F8] border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-15.5">
        <div className="flex items-center gap-[3.5px] justify-end no-scrollbar py-0">
          {secondaryNav.map((tab) => (
            <Link
              key={tab.id}
              to="#"
              className={`relative whitespace-nowrap py-2.5 px-2 text-xs font-normal leading-[17px] transition-all ${
                activeTab === tab.id
                  ? "text-gray-900 before:absolute before:bottom-0 before:left-0 before:right-0 before:h-1 before:bg-[#C5A059]"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
