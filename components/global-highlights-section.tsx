"use client"

import { ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"

const highlights = [
  {
    location: "Paris",
    title: "Culinary nights & art walks",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop",
  },
  {
    location: "Tokyo",
    title: "Hidden rooftop bars & pop-up events",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=800&auto=format&fit=crop",
  },
  {
    location: "New York",
    title: "Adventure escapes & wine tours",
    image: "https://images.unsplash.com/photo-1636865266989-58043bceaa71?w=900&auto=format&fit=crop",
  },
  {
    location: "New York",
    title: "Adventure escapes & wine tours",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
  },
]

export default function GlobalHighlightsSection() {
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-25 mb-10">
      <div className="flex items-center mb-6 cursor-pointer group w-fit">
        <h2 className="font-montserrat font-bold text-lg text-[#484848]">
          Global Highlights
        </h2>
        <ChevronRight className="w-6 h-6 text-[#000000]" />
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="flex relative min-w-[320px] w-full h-[388px] rounded-2xl overflow-hidden shrink-0 group cursor-pointer"
            >
              <Image
                src={highlight.image}
                alt={highlight.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
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
