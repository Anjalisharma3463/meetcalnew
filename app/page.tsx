"use client"
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { MENTORS, Mentor } from "../lib/data"   
import MentorCard from '@/components/mentor-card'
import { Label } from "@/components/ui/label"
import { ChevronDown, ChevronUp , ToggleRight} from 'lucide-react'
import user from '@/lib/mentorData'
// Reusable Dropdown Filter Component
const DropdownFilter = ({ 
  title, 
  options, 
  selectedOptions, 
  onToggle 
}: {
  title: string, 
  options: string[], 
  selectedOptions: string[], 
  onToggle: (option: string) => void
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button 
        className="flex items-center justify-between w-full border px-3 py-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      
      {isOpen && (
        <div className="absolute z-10 w-fit bg-white border rounded mt-1 p-2 shadow-lg">
          {options.map(option => (
            <div key={option} className="flex items-center  space-x-2 mb-1">
              <Checkbox
                id={`${title.toLowerCase()}-${option}`}
                checked={selectedOptions.includes(option)}
                onCheckedChange={() => onToggle(option)}
              />
              <Label htmlFor={`${title.toLowerCase()}-${option}`}>{option}</Label>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function MentorsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  
  // Checkbox filter states
  const [selectedRoles, setSelectedRoles] = useState<string[]>([])
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([])
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([])
  const [selectedRatingSorts, setSelectedRatingSorts] = useState<string[]>([])

  // Get unique values for filters
  const roles = [...new Set(MENTORS.map(mentor => mentor.roleCategory))].filter((role): role is Exclude<typeof role, undefined> => role !== undefined) as string[]
  const companies = [...new Set(MENTORS.map(mentor => mentor.companyCategory))].filter((company): company is Exclude<typeof company, undefined> => company !== undefined)
  const availabilityOptions = ['This week', 'Next week', 'Anytime']
  const ratingSortOptions = ['Low to high', 'High to low']

  // Filtering logic
  const filteredMentors = MENTORS.filter(mentor => 
    mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedRoles.length === 0 || (mentor.roleCategory && selectedRoles.includes(mentor.roleCategory))) &&
    (selectedCompanies.length === 0 || selectedCompanies.includes(mentor.companyCategory ?? '')) &&
    (selectedAvailability.length === 0 || selectedAvailability.includes(mentor.availability ?? ''))
  )

  // Sorting logic
  const sortedMentors = filteredMentors.sort((a, b) => {
    if (selectedRatingSorts.includes('Low to high')) {
      return a.rating - b.rating
    } else if (selectedRatingSorts.includes('High to low')) {
      return b.rating - a.rating
    }
    return 0
  })

  // Helper function to toggle filter selection
  const toggleFilter = (
    currentSelections: string[], 
    setSelections: React.Dispatch<React.SetStateAction<string[]>>, 
    value: string
  ) => {
    setSelections(
      currentSelections.includes(value)
        ? currentSelections.filter(item => item !== value)
        : [...currentSelections, value]
    )
  }

  return (
    <div className="container  h-fit pb-8">
      {/* Header */}
      <div className='w-full h-[64px] bg-[#dbeafe]'>
        <div className='flex justify-around items-center h-full'> 
          <h1 className="text-3xl font-semibold">Mentors</h1>
 
          {!user.isMentor ? (
  <div className="flex items-center space-x-2">
    <button className="bg-white items-center justify-center    flex rounded-md border border-[#CBD5E1] py-[6px] px-[16px]">
        <span className='pr-2'>
        Switch to Mentor
      </span>
    <ToggleRight   size={25}/>
    </button>
     
  </div>
) : (
  <button   className="bg-white rounded-md border border-[#CBD5E1] py-[6px] px-[16px]">
    Become a Mentor
  </button>
)}


         </div>
      </div>

      <div className="mx-auto  px-4 pb-8">
       

        {/* Filters */}
        <div className="flex flex-col md:flex-row py-2 gap-2 md:w-full h-[80px] bg-white  items-center justify-around mb-6">

           {/* Search Input */}
        <div  className='w-[352px]'>
          <Input 
            placeholder="Search by name" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
           
          />
        </div>
       <div className='flex space-x-1'>

          <DropdownFilter 
            title="Role"
            options={roles}
            selectedOptions={selectedRoles}
            onToggle={(option) => toggleFilter(selectedRoles, setSelectedRoles, option)}
          />
          <DropdownFilter 
            title="Company"
            options={companies}
            selectedOptions={selectedCompanies}
            onToggle={(option) => toggleFilter(selectedCompanies, setSelectedCompanies, option)}
          />
          <DropdownFilter 
            title="Slot"
            options={availabilityOptions}
            selectedOptions={selectedAvailability}
            onToggle={(option) => toggleFilter(selectedAvailability, setSelectedAvailability, option)}
          />
          <DropdownFilter 
            title="Rating"
            options={ratingSortOptions}
            selectedOptions={selectedRatingSorts}
            onToggle={(option) => toggleFilter(selectedRatingSorts, setSelectedRatingSorts, option)}
          />
        </div>
            </div>

        {/* Mentors Grid */}
        <div className="flex justify-center  mx-2 items-center flex-col">
          {sortedMentors.map(mentor => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
      </div>
    </div>
  )
}