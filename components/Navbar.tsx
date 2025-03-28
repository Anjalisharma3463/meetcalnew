"use client"

import React from 'react'
import { Bell, ChevronDown } from 'lucide-react'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
 import user from '@/lib/mentorData'
  
export function Navbar() {
  return (
    <div className="flex items-center h-[64px] justify-end space-x-4 pr-6 p-4 border-b">
      
      <div className='w-8 h-8 flex justify-center items-center rounded-sm bg-gray-300'>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
      </div>
 
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center w-[118px] h-[32px] rounded-md px-[12px] py-[6px] bg-white border border-[##CBD5E1]  cursor-pointer">
            
            <Avatar className="h-6 w-6">
              <AvatarImage src={user.avatar} alt="User avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>

        
<span className="ml-2 text-sm font-medium">{user.name}</span>
            <ChevronDown className="h-4 w-4 text-black  " />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
