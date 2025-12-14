"use client"

import { useState, useEffect } from "react"
import HeroSearch from "./ui/search-bar"

import { heroImages } from "@/data/hero"

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative bg-white mt-10 px-10.5 pb-16.5">
        <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden rounded-xl">
        {/* Background Images */}
        {heroImages.map((src, index) => (
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
            <HeroSearch />
        </div>
        </div>
        <div className="absolute bottom-7 left-0 right-0 flex justify-center gap-3 z-10">
            {heroImages.map((_, index) => (
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
