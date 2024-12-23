"use client";
import Activity from "./Activity";
import { useState } from "react";
import { DataKeyActivities } from "./index";
export default function KeyActivities() {
  const [active, setActive] = useState(false);
  return (
    <div className="w-full max-w-[300px]">
      <p className="text-sm mb-4">Other key activities</p>
      <div className="flex flex-col gap-2">
        <Activity
          timeLeft={DataKeyActivities[0].timeLeft}
          company={DataKeyActivities[0].company}
          price={DataKeyActivities[0].price}
          action={DataKeyActivities[0].action}
          activity={DataKeyActivities[0].activity}
        />
        <Activity
          timeLeft={DataKeyActivities[1].timeLeft}
          company={DataKeyActivities[1].company}
          price={DataKeyActivities[1].price}
          action={DataKeyActivities[1].action}
          activity={DataKeyActivities[1].activity}
        />
        {active &&
          DataKeyActivities.filter((act) => act.id != 1)
            .filter((act) => act.id != 2)
            .map((act) => (
              <Activity
                timeLeft={act.timeLeft}
                company={act.company}
                price={act.price}
                action={act.action}
                activity={act.activity}
                key={act.id}
              />
            ))}
      </div>
      <p
        className="font-semibold text-xs mt-4 text-blue-800"
        onClick={() => {
          setActive((active) => !active);
        }}
      >
        {active ? "Collapse key activities" : "Show all key activities"}
      </p>
    </div>
  );
}
