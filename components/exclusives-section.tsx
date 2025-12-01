"use client"

import { ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"

const exclusives = [
  {
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
    title: "Private Tours",
    description: "Your guide to the most happening events this weekend — from concerts to pop-ups.",
  },
  {
    image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=1600&auto=format&fit=crop",
    title: "Private Tours",
    description: "Your guide to the most happening events this weekend — from concerts to pop-ups.",
  },
]

export default function ExclusivesSection() {
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-20.5">
      <div className="flex items-center mb-6 cursor-pointer group w-fit">
        <h2 className="font-montserrat font-bold text-lg text-[#484848]">
          Exclusives
        </h2>
        <ChevronRight className="w-6 h-6 text-gray-900 group-hover:text-[#C5A059] transition-colors" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {exclusives.map((item, index) => (
          <div 
            key={index}
            className="relative h-[316px] rounded-2xl overflow-hidden group cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
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
