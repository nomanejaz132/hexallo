"use client"

import { useState, useEffect } from "react"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 6,
    minutes: 5,
    seconds: 30,
  })

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
  )
}
