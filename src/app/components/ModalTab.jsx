"use client";
import { BsHandThumbsDown } from "react-icons/bs";
import { BsHandThumbsUp } from "react-icons/bs";
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { GoPencil } from "react-icons/go";
import { AiOutlineSend } from "react-icons/ai";
import { useState } from "react";
import Tag from "./Tag";

export default function ModalTab({ name, company }) {
  const [detailState, setDetailState] = useState(true);
  const [openTab, setOpenTab] = useState(true);
  const [like, setLike] = useState(null);
  return (
    <div className="px-3 py-1.5 flex flex-col h-[calc(90vh-200px)] bg-white">
      <div className="flex-shrink-0">
        <div className="flex flex-col items-start lg:w-max lg:flex-row gap-1 lg:items-center text-xs rounded-xl bg-gradient-to-r from-indigo-100 to-purple-100 px-2 py-2">
          <p className="mr-auto bg-clip-text bg-gradient-to-r from-blue-900 to-fuchsia-500 text-transparent">
            {name.split(" ")[0]} may be interested in upgrading her expresso
            machines for her in-store coffee shops.
          </p>
          <div className="flex gap-1 flex-col md:flex-row">
            <button className="border bg-white flex gap-1 items-center px-1 py-[1px] rounded h-6">
              <GoPencil className="text-base" /> Edit
            </button>
            <button className="border flex gap-1 items-center h-6 text-white min-w-fit px-1 py-[1px] bg-gradient-to-r from-blue-600 to-purple-700 rounded">
              {" "}
              <AiOutlineSend className="text-base " /> Approve and send
            </button>
          </div>
        </div>
        <div className="mt-2 flex pt-3 shadow-sm rounded-md mb-2 border-b border-l">
          <p
            className={`mx-2 pb-2 ${
              detailState ? "" : "border-b-[3px] border-blue-700"
            }`}
            onClick={() => {
              setDetailState(false);
            }}
          >
            Engage
          </p>
          <p
            className={`mx-2 pb-2 ${
              detailState ? "border-b-[3px] border-blue-700" : ""
            }`}
            onClick={() => {
              setDetailState(true);
            }}
          >
            Research
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 flex-grow overflow-y-auto h-350px">
        <div className="rounded-xl shadow-lg border p-2 h-auto overflow-y-auto">
          {!detailState && (
            <div className="p-3 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl">
              Nothing to see here yet
            </div>
          )}
          {detailState && (
            <div className="p-3 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl">
              <p className="text-indigo-700 text-sm mb-1">
                Why I picked this lead
              </p>
              <ul className="text-gray-700 list-disc pl-5">
                <li className="mb-0.5">
                  {name.split(" ")[0]} is a{" "}
                  <span className="font-semibold">key decision maker</span> and
                  was browsing `
                  <span className="font-semibold">expresso machines</span>` on
                  First Coffee's website.
                </li>
                <li className="mb-0.5">
                  Multiple people at her company have reported 'slowness' during{" "}
                  <span className="font-semibold">service requests</span>.
                </li>
                <li className="">
                  {company} currently see{" "}
                  <span className="font-semibold">$200M in revenue</span> from
                  their in-store coffee shops
                </li>
              </ul>
              <div className="flex flex-col lg:flex-row gap-3 pt-2 pl-1">
                <Tag
                  title="Decision maker"
                  base="Yes"
                  img="/images/checkmark.jpg"
                />
                <Tag
                  title="Potential deal value"
                  base="$1M"
                  img="/images/medal.jpg"
                />
                <Tag title="Intent" base="High" img="/images/save.png" />
              </div>
            </div>
          )}
          <div className="flex py-2 text-gray-700 w-full">
            <div className="border">1 D365 sales</div>
            <div className="ml-auto flex items-center gap-1">
              <p className="border text-xs">
                AI-generated content may be incorrect
              </p>
              <BsHandThumbsUp
                onClick={() => setLike(true)}
                className={`cursor-pointer ${
                  like ? "text-blue-700" : "border-gray-700"
                }`}
              />
              <BsHandThumbsDown
                onClick={() => setLike(false)}
                className={`cursor-pointer ${
                  like == false ? "fill-blue-700" : "border-gray-700"
                }`}
              />
            </div>
          </div>
        </div>
        <div className="p-3 px-2 leading-[18px] text-gray-700 border rounded-xl  overflow-y-auto">
          <div className="font-semibold mb-2 flex">
            <p className="mr-auto">About {name.split(" ")[0]}</p>
            {openTab ? (
              <FiChevronDown
                className="text-base"
                onClick={() => setOpenTab(false)}
              />
            ) : (
              <FiChevronUp
                className="text-base"
                onClick={() => setOpenTab(true)}
              />
            )}
          </div>
          {openTab && (
            <p className="font-normal">
              {name.split(" ")[0]}, is a dynamic leader with a prove track
              record in optimizing operations and enhancing customer
              experiences. Under her guidance Northwind Traders in-store coffee
              shop, have flourished becoming a hallmark of quality and
              innovation. {name.split(" ")[0]} commitment to excellence makes
              her an ideal partner for First Coffee, she is always seeking
              top-tier equipment to elevate her coffee shops' offerings,
              ensuring consistent high-quality service.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
