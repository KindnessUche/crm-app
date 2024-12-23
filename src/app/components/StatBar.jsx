export default function StatBar({ text, amount, color }) {
  const widthPercentage = `${(amount * 100) / 111}%`;
  return (
    <div className={`${color} h-full`} style={{ width: widthPercentage }}></div>
  );
}
