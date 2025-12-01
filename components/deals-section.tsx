"use client"

import { ChevronRight, ChevronLeft } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const deals = [
  {
    title: "New User Offer",
    discount: "20%",
    bgClass: "bg-linear-to-br from-[#F5A6A6] to-[#E8C8C8]",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop", // Abstract pinkish
  },
  {
    title: "Black Friday Offers",
    discount: "20%",
    bgClass: "bg-linear-to-br from-[#D1D5DB] to-[#9CA3AF]",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop", // Abstract grey
  },
  {
    title: "New User Offer",
    discount: "20%",
    bgClass: "bg-linear-to-br from-[#F5A6A6] to-[#E8C8C8]",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Black Friday Offers",
    discount: "20%",
    bgClass: "bg-linear-to-br from-[#D1D5DB] to-[#9CA3AF]",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop",
  },
]

export default function DealsSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 6,
    minutes: 5,
    seconds: 30,
  })

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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

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
          
          <div className="flex gap-4">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hr", value: timeLeft.hours },
              { label: "Mins", value: timeLeft.minutes },
              { label: "Sec", value: timeLeft.seconds },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-white rounded-xl shadow-[0px_4px_14px_1px_#00000029] border border-gray-100 flex items-center justify-center text-2xl font-extrabold text-[#484848]">
                  {item.value.toString().padStart(2, "0")}
                </div>
                <span className="text-xs text-[#484848] font-montserrat">{item.label}</span>
              </div>
            ))}
          </div>
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
