"use client"

import SectionHeader from "./ui/section-header"


import { hiddenGems } from "@/data/content"

export default function HiddenGemsSection() {
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-26.5">
      <SectionHeader title="Discover Hidden Gems" className="mb-6 group" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {hiddenGems.map((gem, index) => (
          <div 
            key={index}
            className="relative h-[360px] rounded-2xl overflow-hidden group cursor-pointer"
          >
            <img
              src={gem.image}
              alt={gem.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
