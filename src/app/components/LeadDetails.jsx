"use client";
import { useState } from "react";
import DataSection from "./DataSection";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import ClientComponent from "./ClientComponent";
import KeyActivities from "./KeyActivities";

export default function LeadDetails() {
  const [active, setActive] = useState(true);
  return (
    <div className="shadow-xl bg-gradient-to-br from-blue-700 via-cyan-300 to-pink-600 p-[1.5px] mt-4 rounded-xl">
      <div className="p-8 bg-white rounded-[10.5px]  text-xs gap-4 flex flex-col">
        <div className="flex items-center w-full gap-3">
          <div className="max-w-fit mr-auto ">
            <p className="font-bold text-sm text-gray-800">
              Hi Mona, 68% of goal achieved and rest can be achieved by focusing
              on 20 top leads.
            </p>
          </div>
          <DataSection />
          <div
            onClick={() => {
              setActive((active) => !active);
            }}
          >
            <FaChevronUp className={`text-lg ${active ? "block" : "hidden"}`} />
            <FaChevronDown
              className={`text-lg ${active ? "hidden" : "block"}`}
            />
          </div>
        </div>
        <div className={`pt-2 pl-2 flex gap-8 ${active ? "flex" : "hidden"}`}>
          <ClientComponent />
          <div className="h-auto w-0.5 bg-gray-100 mt-2"></div>
          <KeyActivities />
        </div>
      </div>
    </div>
  );
}
