// "use client";

// import React from "react";
// import { Card } from "@/components/ui/card";
// import { Clock, IndianRupee, MessageSquareText, Video, ArrowLeft, ShieldCheck } from "lucide-react"; 
// import { usePathname, useRouter } from "next/navigation";

// export function CareerGuidance() {
//   const router = useRouter();
//   const pathname = usePathname(); 
//   const lastSegment = pathname.split("/").pop(); 

//   return (
//     <>
//       <div className="flex mt-3">
//         <button onClick={() => router.push("/")} className="flex pr-5 items-center text-gray-500">
//           <ArrowLeft color="grey" className="pr-1" /> Back
//         </button>
//         <span className="flex justify-center items-center">
//           Jonny Rose
//           <ShieldCheck size={15} color="green"/>
//         </span>
//       </div>

//       <Card className="px-6 m-10">
//         <h3 className="text-xl">Career Guidance</h3>
//         <p>
//           I&#39;ll give you advice to help with your career decisions. I'll give
//           you advice to help you with your career decisions.
//         </p>
//         <span className="text-gray-600">Assist you with</span>
//         <div className="bg-blue-50 rounded-md">
//           <ul className="list-disc py-4 px-8">
//             <li>I can help you figure out your next steps.</li>
//             <li>
//               I can guide you through career transition and help you explore new
//               fields.
//             </li>
//             <li>
//               Need advice on software engineering roles? I'll help you navigate
//               your options.
//             </li>
//           </ul>
//         </div>
//         <div className="w-full flex divide-x-2">
//           <div className="w-full p-2">
//             <div className="bg-gray-50 w-full p-2">
//               <span className="text-gray-500">Service Type</span>
//               <span className="flex gap-1 mt-2 items-center text-sm">
//                 {lastSegment === "call" ? (
//                   <>
//                     <Video size={20} color="blue"/> 1:1 call
//                   </>
//                 ) : (
//                   <>
//                     <MessageSquareText size={20} /> Priority DM
//                   </>
//                 )}
//               </span>
//             </div>
//           </div>

//           <div className="w-full p-2">
//             <div className="bg-gray-50 w-full p-2">
//               <span className="text-gray-500">Duration</span>
//               <span className="flex gap-1 mt-2 items-center text-sm">
//                 <Clock className="stroke-blue-500 size-4" /> 30 min
//               </span>
//             </div>
//           </div>

//           <div className="w-full p-2">
//             <div className="bg-gray-50 w-full p-2">
//               <span className="text-gray-500">Service Type</span>
//               <span className="flex gap-1 mt-2 items-center text-sm">
//                 <IndianRupee className="stroke-green-500 size-4" /> 300
//               </span>
//             </div>
//           </div>
//         </div>
//       </Card>
//     </>
//   );
// }

const  CareerGuidance = () => {
  return (
    <>
     <h1 className="bg-red-300">  CareerGuidance</h1>
    </>
  )
}

export default CareerGuidance;

