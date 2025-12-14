"use client"

import EventSection from "./event-section"
import eventsData from "../data/events.json"

export default function FeaturedSections() {
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-6 space-y-26.5">
      <EventSection title="Hot This Week" events={eventsData.hotThisWeek} showDate={false} />
      <EventSection title="Tonight's Spotlight" events={eventsData.tonightsSpotlight} />
      <EventSection title="Unmissable" events={eventsData.unmissable} />
    </div>
  )
}
