"use client"

import { ChevronRight } from "lucide-react"
import DestinationCard from "./destination-card"

const destinations = [
  {
    image: "https://images.unsplash.com/photo-1594661745200-810105bcf054?w=900&auto=format&fit=crop",
    title: "Kina Mountain",
    checkIns: "1.2k check-ins this week",
    description: "Your guide to the most happening events this weekend — from concerts to pop-ups.",
  },
  {
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800&auto=format&fit=crop",
    title: "Kina Mountain",
    checkIns: "1.2k check-ins this week",
    description: "Your guide to the most happening events this weekend — from concerts to pop-ups.",
  },
  {
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
    title: "Kina Mountain",
    checkIns: "1.2k check-ins this week",
    description: "Your guide to the most happening events this weekend — from concerts to pop-ups.",
  },
  {
    image: "https://images.unsplash.com/photo-1565523925028-812f891b0e8c?w=900&auto=format&fit=crop",
    title: "Kina Mountain",
    checkIns: "1.2k check-ins this week",
    description: "Your guide to the most happening events this weekend — from concerts to pop-ups.",
  },
]

export default function BuzzingDestinationsSection() {
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center mb-6 cursor-pointer group w-fit">
        <h2 className="font-montserrat font-bold text-lg text-[#484848]">
          Buzzing Destinations
        </h2>
        <ChevronRight className="w-6 h-6 text-[#000000]" />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((destination, index) => (
          <DestinationCard key={index} {...destination} />
        ))}
      </div>
    </div>
  )
}
