"use client"
import React, { useState } from 'react'
import { 
  UserCircle2, 
  Briefcase, 
  CalendarCheck, 
  MessageCircle 
} from 'lucide-react'

// Define the sidebar menu items
const sidebarItems = [
  {
    icon: UserCircle2,
    label: 'Mentor',
    active: true
  },
  {
    icon: Briefcase,
    label: 'Job',
    active: false
  },
  {
    icon: CalendarCheck,
    label: 'Booking',
    active: false
  },
  {
    icon: MessageCircle,
    label: 'Priority DM',
    active: false
  }
]

// ✅ Correct function component definition
const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('Mentor')

  return (
    <div className="w-[197px] bg-[#F8FAFC] border-r border-gray-200 h-screen py-6 px-4">
      <div className="flex flex-col space-y-2">
        {sidebarItems.map((item) => (
          <button 
            key={item.label}
            onClick={() => setActiveItem(item.label)}
            className={`
              flex w-[165px] h-[36px]  items-center space-x-3 
              px-4 py-2 rounded-lg 
              transition-all duration-200 
              ${activeItem === item.label 
                ? 'bg-[#E2E8F0]  ' 
                : 'hover:bg-gray-100 text-gray-600'}
            `}
          >
            <item.icon 
              className={`
                w-5 h-5 
                ${activeItem === item.label 
                  ? 'text-gray-900' 
                  : 'text-gray-400'}
              `} 
            />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

// ✅ Correct default export
export default Sidebar
