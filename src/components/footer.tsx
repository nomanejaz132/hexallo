"use client"

import { Twitter, Linkedin, Facebook, Instagram, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#AE6F28] text-white py-4">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side - Copyright and links */}
          <div className="flex items-center gap-10">
            <span>All rights reserved Hexallo LLC 2023</span>
            <div className="flex flex-wrap items-center gap-5 text-sm">
              <a href="#" className="hover:text-gray-200 transition-colors">
                Privacy policy
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors">
                Terms of service
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors">
                Contact us
              </a>
            </div>
          </div>
          {/* Right side - Social icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-200 transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-gray-200 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-gray-200 transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-gray-200 transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-gray-200 transition-colors" aria-label="WhatsApp">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
