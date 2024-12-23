export default function StatsCard({ text, color, amount }) {
  return (
    <div className="flex gap-1 items-center text-xs">
      <div className={`w-2 h-2 rounded-full ${color}`}></div>
      <p className="">{text}</p>
      <p className="">{amount}</p>
    </div>
  );
}
