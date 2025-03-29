"use client"
import React , {useState}from 'react';
import { Mentor } from '../lib/data';  
import Image from 'next/image';
import  profile from "../lib/profile.png"
import  {ShieldCheck} from 'lucide-react'
import { useRouter } from "next/navigation";

  
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";


const MentorCard: React.FC<{ mentor: Mentor }> = ({ mentor }) => {

  const router = useRouter();

  return (
    <div className="bg-white border w-90 sm:w-full h-fit rounded-lg p-4 flex flex-col sm:flex-row items-start space-x-4   ">
      {/* Profile Image */}
      <div className="w-70 h-55 sm:w-35 sm:h-35 flex-shrink-0 relative">
        <Image 
          src={profile} 
          alt={mentor.name} 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Mentor Details */}
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-2">
          <div  >
            <div className="flex items-center">
              <h2 className="text-lg font-bold  mr-2">{mentor.name}</h2>
               <ShieldCheck className="w-4 h-4 text-green-500" />
            </div>
            <div className="text-sm  text-gray-600">
              {mentor.role} at {mentor.company}
            </div>
          </div>
          <button
  onClick={() => router.push(`/profile/${mentor.id}`)}
  className="bg-gray-800 text-white px-3 py-1 rounded-md text-xs cursor-pointer hover:bg-gray-700"
>
  View profile
</button>

        </div>
 
        <p className="text-xs bg-[#CBD5E1] w-fit h-fit sm:h-22  rounded-md p-2 text-gray-500 mb-2">
          PM @Bytespectrum || iCloud @Google || XML summer @Amazon || DSA || Team Development || Growth Management || Full Stack Developer(MERN) || Full Stack Developer
        </p>

         
      </div>
    </div>
  );
};
  
export default MentorCard;