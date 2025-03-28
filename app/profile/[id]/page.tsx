"use client";

import { ArrowLeft, CircleAlert, IndianRupee, Clock } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { MENTORS, Mentor } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { serviceTypes, services } from "@/lib/services"; 
import { reviews } from "@/lib/reviews";  
import MentorCard from "@/components/mentor-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
 

export default function ProfilePage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;  
 
  const mentor: Mentor | undefined = MENTORS.find((m) => m.id === Number(id));
 
  if (!mentor) {
    return <div className="text-center text-red-500">Mentor Not Found</div>;
  }

  return (
    <div className="">
      {/* Profile Section */}
      <div className="border border-gray-300 w-full p-6 shadow-md bg-white">
        <button onClick={() => router.push("/")} className="flex items-center text-gray-500">
          <ArrowLeft color="grey" className="pr-1" /> Back
        </button>
        <MentorCard mentor={mentor} />
      </div>

      {/* Services Section */}
      <div className="mt-8 mx-25">
        <h2 className="text-xl font-bold mb-4">Services</h2>

        {services.length === 0 ? (
          <div className="flex flex-col mb-10 items-center justify-center">
            <CircleAlert size={60} color="yellow" />
            <h1 className="text-center font-semibold mt-2">
              Temporarily out of <br /> Service
            </h1>
            <button className="rounded-md bg-[#334155] p-3 text-white mt-4">
              Find Other Mentors
            </button>
          </div>
        ) : (
          <Tabs defaultValue="All">
            <TabsList className="flex space-x-2 bg-[#CBD5E1] p-2 px-7 rounded-md">
              {[...serviceTypes].map((type) => (
                <TabsTrigger key={type} value={type} className="px-4 py-2 text-sm">
                  {type}
                </TabsTrigger>
              ))}
            </TabsList>
            {serviceTypes.map((type) => (
              <TabsContent key={type} value={type} className="mt-4">
                <div className="flex gap-2 mb-20 flex-wrap">
                  {services
                    .filter((service) => type === "All" || service.serviceType === type)
                    .map((service) => (
                      <Card key={service.id} className="h-60 border border-gray-200 rounded-xl shadow-sm">
                        <CardHeader className="flex justify-between items-center">
                          <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                          <Button onClick={()=> {
                            router.push(`/details/${ service.serviceType === "1:1 call" ?  "call" : "message" }`)
                          }} variant="outline" className="bg-[#334155] cursor-pointer text-white  text-sm px-4 py-1">
                            View Details
                          </Button>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{service.description}</p>
                          <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                            <div className="p-2 bg-gray-100 rounded-lg">
                              <span className="text-xs text-gray-500 block">Service type</span>
                              <span className="text-sm py-2 bg-[#EEF2FF] font-medium flex items-center justify-center gap-1">
                                {service.icon && <service.icon size={20} />}
                                {service.serviceType}
                              </span>
                            </div>
                            <div className="p-3 bg-gray-100 rounded-lg">
                              <span className="text-xs text-gray-500 block">Duration</span>
                              <span className="text-sm py-2 bg-[#EEF2FF] font-medium flex items-center justify-center gap-1">
                                <Clock size={15} color="blue" />
                                {service.duration}
                              </span>
                            </div>
                            <div className="p-3 bg-gray-100 rounded-lg">
                              <span className="text-xs text-gray-500 block">Amount</span>
                              <span className="text-sm bg-[#EEF2FF] py-2 font-medium flex items-center justify-center gap-1">
                                <IndianRupee color="green" size={15} />
                                {service.amount}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>

      <hr />

      {/* Reviews Section */}
      <div className="mt-8 mx-20">
        <h2 className="text-xl font-bold mb-4">Reviews</h2>
        <div className="text-gray-600 mb-4">
          3 Reviews | <span className="text-yellow-500">⭐ 5.0</span>
        </div>
        <div className="">
          {reviews.map((review, index) => (
            <Card key={index} className="p-2 my-4 shadow-sm border rounded-lg">
              <div className="flex items-center space-x-1 text-yellow-500 font-semibold">⭐ {review.rating}</div>
              <p className="text-gray-700 mt-2">{review.comment}</p>
              <div className="flex items-center mt-4">
                <Avatar>
                  <AvatarImage src={review.avatar} alt={review.name} />
                  <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="ml-2 text-gray-700 font-medium">{review.name}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
