import Image from "next/image";
import { MdForwardToInbox } from "react-icons/md";
export default function Activity({
  timeLeft,
  company,
  price,
  action,
  activity,
}) {
  return (
    <div className="px-2 border rounded-md py-1 w-full flex flex-col gap-1 shadow-sm">
      <div className="flex items-center">
        <div className="rounded-full w-7  aspect-square  mr-1.5 overflow-hidden">
          <Image src="/images/dam.jpg" alt="activity" width={28} height={28} />
        </div>
        <div className="">
          <p className="font-bold">{activity}</p>
          <p className="mt-[1px] text-gray-500 text-[0.6rem]">
            {company}
            <span className="w-[3px] mb-[3px] mx-1 inline-block aspect-square rounded-full bg-slate-600"></span>
            {price}
            <span className="w-[3px] mb-[3px] mx-1 inline-block aspect-square rounded-full bg-slate-600"></span>
            {timeLeft} to close
          </p>
        </div>
      </div>
      <div className="flex items-center text-slate-600 font-semibold tracking-tight bg-slate-100 p-2 rounded-md ">
        <MdForwardToInbox size={14} className="mr-1.5" />
        <p className="block">{action}</p>
      </div>
    </div>
  );
}
