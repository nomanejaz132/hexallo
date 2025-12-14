import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  className?: string
  chevronColor?: string
}

export default function SectionHeader({ title, className, chevronColor = "text-[#000000]" }: SectionHeaderProps) {
  return (
    <div className={cn("flex items-center mb-6 cursor-pointer group w-fit", className)}>
      <h2 className="font-montserrat font-bold text-lg text-[#484848]">
        {title}
      </h2>
      <ChevronRight className={cn("w-6 h-6 transition-colors", chevronColor)} />
    </div>
  )
}
