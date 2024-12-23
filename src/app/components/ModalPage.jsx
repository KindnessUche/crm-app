import { BsHandThumbsDown } from "react-icons/bs";
import { BsHandThumbsUp } from "react-icons/bs";
import { useState } from "react";
import { ClientDatas } from "./index.js";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import ClientModal from "./ClientModal";

export default function ModalPage() {
  const numClients = ClientDatas.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [like, setLike] = useState(null);
  return (
    <div className="shadow-xl bg-gradient-to-br from-blue-700 via-cyan-300 to-pink-600 p-[1.5px] rounded-xl">
      <div className="p-8  rounded-[10.5px] text-xs flex flex-col gap-4 w-auto max-w-max bg-gray-50">
        <div
          className={`rounded-full absolute left-0 top-1/2 -translate-y-1/2 p-2 -translate-x-1/2 border-2 bg-white cursor-pointer ${
            currentPage === 1 ? "hidden" : ""
          }`}
          onClick={() => {
            setCurrentPage((currentPage) => currentPage - 1);
          }}
        >
          <GoChevronLeft className="text-blue-600 text-2xl outline-none" />
        </div>
        <div
          className={`absolute rounded-full right-0 top-1/2 p-2   -translate-y-1/2 translate-x-1/2 bg-white border-2 cursor-pointer ${
            currentPage === numClients ? "hidden" : ""
          }`}
          onClick={() => {
            setCurrentPage((currentPage) => currentPage + 1);
          }}
        >
          <GoChevronRight className=" text-2xl text-blue-600 outline-none" />
        </div>
        {ClientDatas.filter((client) => {
          if (client.id === currentPage) return client;
        }).map((client) => (
          <ClientModal client={client} key={client.id} />
        ))}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p>
              Showing {currentPage} of {numClients}
            </p>
            <div className="h-3 border border-slate-600"></div>
            <p className="text-blue-700">show all</p>{" "}
          </div>
          <div className=" gap-2 flex items-center">
            {ClientDatas.map((client) => (
              <div
                key={client.id}
                className={`h-1.5 w-1.5 rounded-full ${
                  currentPage == client.id ? "bg-blue-800" : "bg-gray-200"
                } `}
              ></div>
            ))}
          </div>
          <div className="flex items-center gap-2 text-base">
            <BsHandThumbsUp
              onClick={() => setLike(true)}
              className={`${like ? "text-blue-700" : "text-gray-700"}`}
            />
            <BsHandThumbsDown
              onClick={() => setLike(false)}
              className={`${like == false ? "fill-blue-700" : "text-gray-700"}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
