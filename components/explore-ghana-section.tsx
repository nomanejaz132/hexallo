"use client"

import CategoryCard from "./category-card"
import EventSection from "./event-section"
import categoriesData from "../data/categories.json"
import eventsData from "../data/events.json"

export default function ExploreGhanaSection() {
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-14 py-10 bg-[#F8F6EB]">
      <h2 className="font-montserrat font-bold text-2xl text-gray-900 mb-8">
        Explore Ghana
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
        {categoriesData.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
      <div className="mt-16">
        <EventSection title="Ghana’s Top 10s" events={eventsData.ghanasTop10s} />
      </div>
    </div>
  )
}
