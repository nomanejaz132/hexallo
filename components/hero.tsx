"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"

const images = [
  "https://plus.unsplash.com/premium_photo-1661962660197-6c2430fb49a6?w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551279076-6887dee32c7e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2070&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1725394678519-d41dc107ece6?q=80&w=2071&auto=format&fit=crop", 
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative bg-white mt-10 px-10.5 pb-16.5">
        <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden rounded-xl">
        {/* Background Images */}
        {images.map((src, index) => (
            <div
            key={src}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
                backgroundImage: `url('${src}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center text-center text-white">
            <h1 className="max-w-[590px] text-4xl font-bold mb-5 text-center drop-shadow-md leading-tight">
              Discover, Book & Enjoy What's Happening Around You
            </h1>
            <p className="text-sm font-semibold mb-10">
            From local events to world-famous experiences — all in one place.
            </p>

            {/* Search Bar */}
            <div className="w-full h-[37px] max-w-4xl bg-white rounded-xl border-[1.75px] border-[#E3E3E1] flex items-center shadow-lg">
            <div className="flex-1">
                <input 
                type="text" 
                placeholder="Search any event" 
                className="w-full h-8.5 text-xs px-6 text-[#6A6A6A] placeholder:text-[#6A6A6A] focus:outline-none bg-transparent"
                />
            </div>
            <div className="flex-1">
                <input 
                type="text" 
                placeholder="Where" 
                className="w-full h-8.5 text-sm px-6 text-[#131314] placeholder:text-[#131314] focus:outline-none bg-transparent"
                />
            </div>
            <div className="flex-1 px-6">
                <input 
                type="text" 
                placeholder="When" 
                className="w-full h-8.5 text-sm text-[#131314] placeholder:text-[#131314] focus:outline-none bg-transparent"
                />
            </div>
            <button className="bg-[#AE6F28] mr-2.5 hover:bg-[#b08d4b] text-white px-2 py-[5px] rounded-xl transition-colors shrink-0">
                <Search className="w-5 h-5" />
            </button>
            </div>
        </div>
        </div>
        <div className="absolute bottom-7 left-0 right-0 flex justify-center gap-3 z-10">
            {images.map((_, index) => (
            <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2.5 h-2.5 scale-110 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                    ? "bg-[#AE6F28]" 
                    : "bg-[#D9D9D9] hover:bg-white"
                }`}
                aria-label={`Go to slide ${index + 1}`}
            />
            ))}
        </div>
    </div>
  )
}
