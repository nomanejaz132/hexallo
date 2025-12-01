"use client"

import Image from "next/image"

interface CategoryCardProps {
  title: string
  rating: string
  image: string
  className?: string
}

export default function CategoryCard({
  title,
  rating,
  image,
  className = "",
}: CategoryCardProps) {
  return (
    <div 
      className={`relative h-[228px] rounded-2xl overflow-hidden group cursor-pointer ${className}`}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-80" />

      {/* Rating Badge */}
      <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-sm font-medium">
        {rating}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <h3 className="font-montserrat font-bold text-xl text-white mb-1">
          {title}
        </h3>
        <p className="text-gray-300 text-xs font-medium">
          Explore
        </p>
      </div>
    </div>
  )
}
