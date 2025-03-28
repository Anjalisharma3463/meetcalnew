"use client";

import { Dispatch, SetStateAction, useState, useMemo } from "react";
import { Calendar as Calendar1, Clock } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import TimezoneDropdown from "./TimezoneDropdown";

export function SlotComponent() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const formattedDate =
    date?.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      weekday: "long",
    }) || "";

  return (
    <Card className="px-4 m-10">
      <div className="flex justify-evenly gap-4 hmin">
        <div>
          <span className="flex items-center gap-2 py-2">
            <Calendar1 className="size-4 stroke-blue-500" /> Date
          </span>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="bg-gray-50 border-2"
            classNames={{
              head_cell:
                "text-muted-foreground rounded-md w-16 font-normal text-[0.8rem]",
              day: cn(
                buttonVariants({ variant: "ghost" }),
                "h-8 w-16 p-0 font-normal aria-selected:opacity-100"
              ),
            }}
          />
        </div>
        <div>
          <span className="flex items-center gap-2 py-2">
            <Clock className="size-4 stroke-blue-500" /> Time
          </span>
          <div className="bg-gray-50 border-2 p-4 h-[calc(100%-2.5rem)]">
            <span>{formattedDate}</span>
            <TimeSlots date={date} setDate={setDate} />
          </div>
        </div>
      </div>
      <TimezoneDropdown />
      <div className="flex justify-end mt-4">
        <Button>Confirm Details</Button>
      </div>
    </Card>
  );
}

function TimeSlots({
  date,
  setDate,
}: {
  date: Date | undefined;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
}) {
  const formatTime = (hour: number, minute: number) => {
    const period = hour >= 12 ? "PM" : "AM";
    const formattedHour = (hour % 12 || 12).toString().padStart(2, "0");
    const formattedMinute = minute.toString().padStart(2, "0");
    return `${formattedHour}:${formattedMinute} ${period}`;
  };

  const rootHours = date?.getHours();
  const timeSlots = [];
  for (let hour = 0; hour < 24; hour++) {
    timeSlots.push(
      <div
        key={hour}
        className={cn("p-2 border-2 rounded-md text-center cursor-pointer", {
          "border-black": rootHours == hour,
        })}
        onClick={() => {
          setDate((date) => {
            let newDate;
            if (date) {
              newDate = new Date(date);
            } else {
              newDate = new Date();
            }
            console.log(newDate?.getHours());
            newDate?.setHours(hour);
            return newDate;
          });
        }}
      >
        {formatTime(hour, 0)} - {formatTime(hour, 30)}
      </div>
    );
  }

  return (
    <div className="grid gap-4 h-[16.5rem] grid-cols-2 overflow-auto py-4">
      {timeSlots}
    </div>
  );
}
