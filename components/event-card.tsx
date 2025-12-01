"use client"

import { Star } from "lucide-react"
import Image from "next/image"

interface EventCardProps {
  variant?: string
  image: string
  tag: string
  title: string
  date: string
  time: string
  location: string
  price: string
  rating?: number
  showDate?: boolean
}

export default function EventCard({
  variant = 'yellow',
  image,
  tag,
  title,
  date,
  time,
  location,
  price,
  rating,
  showDate = true,
}: EventCardProps) {
  return (
    <div className={`flex flex-col gap-3 min-w-[280px] group cursor-pointer border-2 ${variant === 'white' ? 'bg-white border-[#00000008]' : 'bg-[#FAF8ED] border-white' } hover:bg-[#F7E4B6] py-2 px-[7px] rounded-2xl shadow-[0px_24px_90px_0px_#C0BCA138]`}>
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-[14px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="flex flex-col gap-1 p-1.5">
        <div className="flex items-center justify-between">
          <div className="font-montserrat self-start rounded-lg bg-[#F7E4B6] px-[9px] py-[5px] text-[11px] leading-[13px] text-black">
            {tag}
          </div>
          {rating && (
            <div className="flex items-center gap-1 text-xs font-medium text-gray-600">
              <Star className="w-3 h-3 fill-[#C5A059] text-[#C5A059]" />
              <span>{rating}</span>
            </div>
          )}
        </div>
        
        <h3 className="font-montserrat font-semibold text-xs leading-[24px] text-[#2D3134]">
          {title}
        </h3>
        
        <div className="flex flex-col gap-1.5 text-xs leading-[14px] font-montserrat text-[#5B5F62]">
          {showDate && <p>{date}</p>}
          <p>{time}</p>
          <p>{location}</p>
        </div>
        
        <div className="py-[7px] text-xs leading-5 text-[#2D3134]">
          From <span className="font-semibold">{price}</span>
        </div>
      </div>
    </div>
  )
}
