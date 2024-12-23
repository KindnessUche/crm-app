"use client";
import ClientCard from "./ClientCard";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { ClientDatas } from "./index.js";
import { useState } from "react";
export default function ClientComponent() {
  const numClients = ClientDatas.length;
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="relative flex gap-5 flex-col items-center">
      <p className="text-[0.82rem] text-gray-500 tracking-tight font-semibold self-start">
        Copilot has pinpointed 20 key leads that show strong purchase intent and
        are actively engaging. This leads need your focus.
      </p>
      <div className="relative mt-2 flex flex-col lg:flex-row gap-4 items-center">
        <div
          className={`rounded-full absolute top-1/2 left-0 -translate-y-1/2  p-0.5 -translate-x-1/2 border-2 cursor-pointer bg-white ${
            currentPage === 1 ? "hidden" : ""
          }`}
          onClick={() => {
            setCurrentPage((currentPage) => currentPage - 1);
          }}
        >
          <GoChevronLeft className="text-blue-600 text-2xl outline-none" />
        </div>
        <div
          className={`absolute rounded-full right-0 top-1/2 p-0.5 cursor-pointer  -translate-y-1/2 translate-x-1/2 bg-white border-2 ${
            currentPage === numClients - 1 ? "hidden" : ""
          }`}
          onClick={() => {
            setCurrentPage((currentPage) => currentPage + 1);
          }}
        >
          <GoChevronRight className=" text-2xl text-blue-600 outline-none" />
        </div>

        {ClientDatas.filter((client) => {
          if (client.id === currentPage) return client;
          if (client.id === currentPage + 1) return client;
        }).map((client) => (
          <ClientCard key={client.id} client={client} />
        ))}
      </div>
      <div className=" gap-2 flex items-center">
        {ClientDatas.filter((client) => client.id != numClients).map(
          (client) => (
            <div
              key={client.id}
              className={`h-1.5 w-1.5 rounded-full ${
                currentPage == client.id ? "bg-blue-800" : "bg-gray-200"
              } `}
            ></div>
          )
        )}
      </div>
    </div>
  );
}
