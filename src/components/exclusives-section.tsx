"use client"

import { ArrowRight } from "lucide-react"
import SectionHeader from "./ui/section-header"


import { exclusives } from "@/data/content"

export default function ExclusivesSection() {
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-20.5">
      <SectionHeader title="Exclusives" className="mb-6 group" chevronColor="text-gray-900 group-hover:text-[#C5A059]" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {exclusives.map((item, index) => (
          <div 
            key={index}
            className="relative h-[316px] rounded-2xl overflow-hidden group cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Content */}
            <div className="absolute bottom-0 left-0 px-7 py-3 w-full bg-[#2D313480]">
              <h3 className="font-montserrat font-bold text-base text-white py-1">
                {item.title}
              </h3>
              <p className="font-montserrat text-white py-1 max-w-md text-xs leading-[14px]">
                {item.description}
              </p>
              <div className="flex items-center gap-0.5 py-1.5 text-white font-montserrat font-semibold text-xs group/btn">
                <span>Explore Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
