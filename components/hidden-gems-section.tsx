"use client"

import { ChevronRight } from "lucide-react"
import Image from "next/image"

const hiddenGems = [
  {
    title: "The Secret Garden Café",
    description: "AccraHidden courtyard serving organic brunch & live music evenings.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop", // Colosseum/Ruins vibe
  },
  {
    title: "Napa's Underground Jazz",
    description: "Vintage cellar turned into an intimate live stages.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop", // Ruins/Columns
  },
  {
    title: "Sky Hammock Trail",
    description: "BaliSwing over the valley — a serene thrill far from crowds",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop", // Monument/Arch
  },
  {
    title: "Sky Hammock Trail",
    description: "BaliSwing over the valley — a serene thrill far from crowds",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop", // Colorful stairs/temple
  },
]

export default function HiddenGemsSection() {
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-26.5">
      <div className="flex items-center mb-6 cursor-pointer group w-fit">
        <h2 className="font-montserrat font-bold text-lg text-[#484848]">
          Discover Hidden Gems
        </h2>
        <ChevronRight className="w-6 h-6 text-[#000000]" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {hiddenGems.map((gem, index) => (
          <div 
            key={index}
            className="relative h-[360px] rounded-2xl overflow-hidden group cursor-pointer"
          >
            <Image
              src={gem.image}
              alt={gem.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Content */}
            <div className="absolute bottom-0 left-0 px-7 pt-3 pb-6.5 w-full bg-[#2D313480]">
              <h3 className="font-montserrat font-bold text-sm text-white mb-1.5">
                {gem.title}
              </h3>
              <p className="text-white text-xs font-semibold font-montserrat leading-relaxed">
                {gem.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
