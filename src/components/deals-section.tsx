"use client"

import { ChevronRight, ChevronLeft } from "lucide-react"
import { useRef } from "react"
import CountdownTimer from "./ui/countdown-timer"

import { deals } from "@/data/deals"

export default function DealsSection() {

  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320 // Card width + gap
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }


  return (
    <div className="max-w-[1600px] mx-auto pl-4 sm:pl-6 lg:pl-8 py-16">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side - Info & Timer */}
        <div className="lg:w-1/3 flex flex-col justify-center">
          <h2 className="font-montserrat font-bold text-lg text-[#484848] mb-4">
            Blazing Deals
          </h2>
          <p className="text-[#8A8A8A] text-xs mb-8 font-montserrat leading-[15px]">
            Don't miss our most exciting limited-time offers and new-user specials.
          </p>
          
          <button className="bg-[#2D3134] text-white px-4 py-2.5 rounded-full font-medium w-fit mb-8">
            Explore Offers Now
          </button>
          
          <p className="text-[#D00E28] text-xs font-montserrat font-medium mb-7">
            Offer ends in...
          </p>
          
          <CountdownTimer />
        </div>

        {/* Right Side - Scrollable Cards */}
        <div className="lg:w-2/3 relative">
          {/* Navigation Buttons */}
          <div className="absolute top-[170px] left-0 w-full flex justify-between gap-2 px-10 pointer-events-none z-50">
            <button 
              onClick={() => scroll('left')}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-white pointer-events-auto shadow-sm hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-[#B6B6B6]" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-white pointer-events-auto shadow-sm hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-[#B6B6B6]" />
            </button>
          </div>

          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto no-scrollbar pb-10 relative"
          >
            <div className="flex gap-6 w-fit px-4">
              {deals.map((deal, index) => (
                <div 
                  key={index}
                  className="relative w-[353px] h-[380px] rounded-3xl overflow-hidden shrink-0 group cursor-pointer"
                >
                  {/* Background Image/Gradient */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${deal.image}')` }}
                  />
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/10">
                    <h3 className="font-montserrat font-bold text-3xl text-gray-800 mb-2 leading-tight">
                      {deal.title}
                    </h3>
                    <p className="text-gray-700 font-medium tracking-widest text-sm mb-2 uppercase">
                      UP TO
                    </p>
                    <p className="font-montserrat font-bold text-4xl text-gray-800">
                      {deal.discount} <span className="text-xl">OFF</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
