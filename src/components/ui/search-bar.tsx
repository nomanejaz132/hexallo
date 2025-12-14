import { Search } from "lucide-react"

export default function HeroSearch() {
  return (
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
  )
}
