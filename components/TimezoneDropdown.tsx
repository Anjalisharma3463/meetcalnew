// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useState } from "react";

// export default function TimezoneDropdown() {
//   const timezones = Intl.supportedValuesOf("timeZone");
//   const [selectedTimezone, setSelectedTimezone] = useState(
//     Intl.DateTimeFormat().resolvedOptions().timeZone
//   );

//   const formatTimezone = (tz: string) => {
//     const now = new Date();
//     const formatter = new Intl.DateTimeFormat("en-US", {
//       timeZone: tz,
//       timeZoneName: "longOffset",
//     });
//     const offset =
//       formatter.formatToParts(now).find((p) => p.type === "timeZoneName")
//         ?.value || "";

//     const shortName =
//       new Intl.DateTimeFormat("en-US", {
//         timeZone: tz,
//         timeZoneName: "short",
//       })
//         .formatToParts(now)
//         .find((p) => p.type === "timeZoneName")?.value || "";

//     return `(${offset}) ${tz} (${shortName})`;
//   };

//   return (
//     <div className="mt-8">
//       <h2 className="pb-4 text-2xl">Timezone</h2>
//       <Select
//         value={selectedTimezone}
//         onValueChange={(e) => setSelectedTimezone(e.valueOf())}
//       >
//         <SelectTrigger className="w-full">
//           <SelectValue placeholder="Time Zone" />
//         </SelectTrigger>
//         <SelectContent>
//           {timezones.map((tz) => (
//             <SelectItem key={tz} value={tz}>
//               {formatTimezone(tz)}
//             </SelectItem>
//           ))}
//         </SelectContent>
//       </Select>
//     </div>
//   );
// }

const  TimezoneDropdown = () => {
  return (
    <>
     <h1 className="bg-red-300">  timezone</h1>
    </>
  )
}

export default TimezoneDropdown;
