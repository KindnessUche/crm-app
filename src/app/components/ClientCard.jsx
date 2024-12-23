import Image from "next/image";
import Link from "next/link";
import { MdForwardToInbox } from "react-icons/md";

export default function ClientCard({ client }) {
  return (
    <Link href="/sales/leads/?show=true">
      <div className="p-4 shadow-sm flex flex-col gap-2 max-w-[410px] border rounded-lg">
        <div className="flex items-center">
          <div className="rounded-full w-7  aspect-square  mr-1.5 overflow-hidden">
            <Image src={client.img} alt={client.name} width={28} height={28} />
          </div>
          <div className="">
            <p className="font-semibold">{client.name}</p>
            <p className="mt-0.5 text-gray-500">
              {client.title}
              <span className="w-[3px] mb-[3px] mx-1 inline-block aspect-square rounded-full bg-slate-600"></span>
              {client.company}
            </p>
          </div>
        </div>
        <div className="rounded-md p-2 leading-5 bg-gradient-to-r from-gray-100 to-purple-50">
          <div className="flex items-start font-semibold">
            <MdForwardToInbox size={18} className="mr-1.5" />
            <p className="block">Engage with {client.name}</p>
          </div>
          <p>{client.msg}</p>
        </div>
        <div>
          <p className="mt-0.5 text-gray-500 px-2">
            {client.m1}
            <span className="w-[3px] mb-[3px] mx-1 inline-block aspect-square rounded-full bg-slate-600"></span>
            {client.m2}
          </p>
        </div>
      </div>
    </Link>
  );
}
