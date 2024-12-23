import { statistics } from "./index.js";
import StatBar from "./StatBar.jsx";
import StatsCard from "./StatsCard.jsx";

export default function DataSection() {
  return (
    <div className="w-full ml-auto max-w-xl min-w-60">
      <div className="flex items-end gap-5 px-2 w-">
        <div className="mr-auto">
          <p className="">1 month until Q4 ends</p>
        </div>
        <p className="">
          Target <span className="font-bold">$45 million</span>{" "}
        </p>
        <p className="">68% of target achieved </p>
      </div>
      <div className="flex h-2 min-w-full w-auto rounded-full overflow-hidden bg-transparent">
        {statistics.map((stat) => (
          <StatBar
            key={stat.id}
            text={stat.type}
            color={stat.color}
            amount={stat.amount.slice(1, -1)}
          />
        ))}
      </div>
      <div className="flex items-center gap-3 tracking-tight px-2">
        {statistics.map((stat) => (
          <StatsCard
            key={stat.id}
            text={stat.type}
            color={stat.color}
            amount={stat.amount}
          />
        ))}
      </div>
    </div>
  );
}
