import { Link } from "react-router-dom"
import { Globe, ChevronDown } from "lucide-react"

export default function TopBar() {
  return (
    <div className="w-full bg-white border-b border-gray-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-17">
        <div className="flex h-10 items-center justify-end gap-[3px] text-[11px] font-medium text-gray-600">
          <Link to="#" className="hover:text-black transition-colors px-2 py-2.5">
            Events Calendar
          </Link>
          <Link to="#" className="hover:text-black transition-colors  px-2 py-2.5">
            Blog
          </Link>
          <Link to="#" className="hover:text-black transition-colors  px-2 py-2.5">
            Limelight
          </Link>
          
          <div className="flex items-center gap-1 cursor-pointer hover:text-black transition-colors px-2 py-2.5">
            <Globe className="h-3 w-3" />
            <span>EN(US)</span>
            <ChevronDown className="h-3 w-3" />
          </div>
          
          <div className="flex items-center gap-1 cursor-pointer hover:text-black transition-colors px-2 py-2.5">
            {/* Placeholder for US Flag */}
            <div className="w-4 h-2.5 bg-blue-800 relative overflow-hidden rounded-[1px]">
              <div className="absolute inset-0 bg-red-600 h-px top-0.5"></div>
              <div className="absolute inset-0 bg-red-600 h-px top-1.5"></div>
            </div>
            <span>United States</span>
            <ChevronDown className="h-3 w-3" />
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-black transition-colors px-2 py-2.5">
            <span>California</span>
            <ChevronDown className="h-3 w-3" />
          </div>

          <Link to="#" className="py-2.5 px-2 text-xs leading-4 fon text-[#3C3C3C] transition-colors">Sign In | Up</Link>
          

          <Link to="#" className="text-[#AE6F28] py-2.5 px-2 leading-4 text-[13px] font-medium hover:opacity-80 transition-opacity">
            Business
          </Link>

          <Link to="#" className="text-black py-2.5 px-2 leading-4 text-[13px] font-bold hover:opacity-80 transition-opacity">
            Create Event
          </Link>
        </div>
      </div>
    </div>
  )
}
