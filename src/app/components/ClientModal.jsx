import { FaLinkedin } from "react-icons/fa";
import ModalTab from "./ModalTab";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { MdForwardToInbox } from "react-icons/md";
import Link from "next/link";

export default function ClientModal({ client }) {
  return (
    <div>
      <div className=" flex mb-3 items-center px-3">
        <MdForwardToInbox className="text-xl text-sky-700 mr-2" />
        <p className="text-base text-slate-700 font-semibold">
          Engage with {client.name.split(" ")[0]}
        </p>
        <Link href="/sales/leads" className="ml-auto text-xl">
          <IoMdClose />
        </Link>
      </div>
      <div className="flex items-center border rounded-md px-3 py-1.5">
        <div className="rounded-full w-9  aspect-square  mr-1.5 overflow-hidden">
          <Image src={client.img} alt="client Image" width={36} height={36} />
        </div>
        <div className="flex flex-col gap-0.5 text-xs ">
          <p className="font-semibold text-sm text-slate-700">{client.name}</p>
          <div className="flex gap-1">
            <FaLinkedin className="text-sky-700" size={16} />
            <div className="border border-gray-500 h-4"></div>
            <p className="mt-0.5 text-gray-500">
              {client.title}, {client.company}
            </p>
          </div>
        </div>
      </div>
      <ModalTab name={client.name} company={client.company} />
    </div>
  );
}
