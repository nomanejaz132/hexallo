"use client"

import { ChevronRight } from "lucide-react"
import EventCard from "./event-card"

export interface Event {
  image: string
  tag: string
  title: string
  date: string
  time: string
  location: string
  price: string
  rating?: number
}

interface EventSectionProps {
  title: string
  events: Event[]
  showDate?: boolean
}

export default function EventSection({ title, events, showDate = true }: EventSectionProps) {
  return (
    <div className="">
      <div className="flex items-center mb-6 cursor-pointer group w-fit">
        <h2 className="font-montserrat font-bold text-lg text-[#484848]">
          {title}
        </h2>
        <ChevronRight className="w-6 h-6 text-[#000000]" />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event, index) => (
          <EventCard key={index} {...event} showDate={showDate} />
        ))}
      </div>
    </div>
  )
}
