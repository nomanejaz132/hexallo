"use client"

import { ArrowRight } from "lucide-react"
import SectionHeader from "./ui/section-header"


import { highlights } from "@/data/content"

export default function GlobalHighlightsSection() {
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-25 mb-10">
      <SectionHeader title="Global Highlights" className="mb-6 group" />

      <div className="overflow-x-auto no-scrollbar">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="flex relative min-w-[320px] w-full h-[388px] rounded-2xl overflow-hidden shrink-0 group cursor-pointer"
            >
              <img
                src={highlight.image}
                alt={highlight.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-90" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <p className="text-gray-300 text-xs font-medium mb-2">
                  {highlight.location}
                </p>
                <h3 className="font-montserrat font-bold text-lg text-white mb-4 leading-tight">
                  {highlight.title}
                </h3>
                <div className="flex items-center gap-2 text-white text-sm font-medium group/btn">
                  <span>Explore Now</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
