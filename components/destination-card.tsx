"use client"

import Image from "next/image"

interface DestinationCardProps {
  image: string
  title: string
  checkIns: string
  description: string
}

export default function DestinationCard({
  image,
  title,
  checkIns,
  description,
}: DestinationCardProps) {
  return (
    <div className="flex flex-col min-w-[280px] h-[372px] group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-4/3 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="px-5 py-5.5 flex flex-col gap-2">
        <h3 className="font-montserrat font-semibold text-sm text-black">
          {title}
        </h3>
        
        <p className="font-montserrat font-medium text-sm text-[#00000080]">
          {checkIns}
        </p>
        
        <p className="font-montserrat font-medium text-sm text-[#00000080]">
          {description}
        </p>
      </div>
    </div>
  )
}
