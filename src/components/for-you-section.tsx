"use client"

import { ChevronRight } from "lucide-react"
import EventCard from "./ui/event-card"

const forYouEvents = [
  {
    image: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?q=80&w=800&auto=format&fit=crop",
    tag: "Lounge",
    title: "DJ Liv North Live",
    date: "Wed, 5th Dec",
    time: "10:30 PM - 12:30 PM",
    location: "NewYork City",
    price: "USD 89",
    rating: 4.8,
  },
  {
    image: "https://images.unsplash.com/photo-1588083066783-8828e623bad7?w=900&auto=format&fit=crop",
    tag: "Lounge",
    title: "DJ Liv North Live",
    date: "Wed, 5th Dec",
    time: "10:30 PM - 12:30 PM",
    location: "NewYork City",
    price: "USD 89",
    rating: 4.8,
  },
  {
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=800&auto=format&fit=crop",
    tag: "Lounge",
    title: "DJ Liv North Live",
    date: "Wed, 5th Dec",
    time: "10:30 PM - 12:30 PM",
    location: "NewYork City",
    price: "USD 89",
    rating: 4.8,
  },
  {
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop",
    tag: "Lounge",
    title: "DJ Liv North Live",
    date: "Wed, 5th Dec",
    time: "10:30 PM - 12:30 PM",
    location: "NewYork City",
    price: "USD 89",
    rating: 4.8,
  },
]

export default function ForYouSection() {
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center mb-6 cursor-pointer group w-fit">
        <h2 className="font-montserrat font-bold text-lg text-[#484848]">
          For you
        </h2>
        <ChevronRight className="w-6 h-6 text-[#000000]" />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {forYouEvents.map((event, index) => (
          <EventCard variant="white" key={index} {...event} />
        ))}
      </div>
    </div>
  )
}
