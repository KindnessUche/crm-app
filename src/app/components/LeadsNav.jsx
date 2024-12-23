import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { FaChevronUP } from "react-icons/fa6";
import IconCards from "./IconCards";
import { RiLineChartFill } from "react-icons/ri";
import { CiCircleList } from "react-icons/ci";
import { LuPlus } from "react-icons/lu";
import { VscRefresh } from "react-icons/vsc";
import { PiMicrosoftTeamsLogo } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FiPieChart } from "react-icons/fi";
import { BsFilter } from "react-icons/bs";
import { LuColumns3 } from "react-icons/lu";
import { VscFileSymlinkDirectory } from "react-icons/vsc";

export default function LeadsNav({ onClick, openActive }) {
  return (
    <div className="px-2 py-1 w-screen flex max-w-7xl shadow-md rounded-md border-2">
      <div className="flex gap-2 items-center text-sm mr-auto">
        <p>My open leads</p>
        <FaChevronDown
          onClick={onClick}
          className={`${openActive ? "" : "hidden"}`}
        />
        <FaChevronUp
          onClick={onClick}
          className={`${openActive ? "hidden" : ""}`}
        />
      </div>
      <div className="flex gap-1 items-center">
        <div className="flex items-center ">
          <div className="flex">
            <IconCards title="Show chart" Icon={RiLineChartFill} />
            <IconCards title="Focused view" Icon={CiCircleList} />
            <IconCards title="New" Icon={LuPlus} />
            <IconCards title="Refresh" Icon={VscRefresh} />
            <IconCards title="Collaborate" Icon={PiMicrosoftTeamsLogo} />
            <IconCards title="Delete" Icon={RiDeleteBin6Line} />
          </div>
          <p className="opacity-40 text-slate-500">|</p>
          <FaChevronDown className="text-slate-500 text-sm" />
        </div>
        <div className="mx-2">
          <HiOutlineDotsVertical />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <IconCards title="Smart data" Icon={FiPieChart} border />
            <IconCards title="Edit filters" Icon={BsFilter} border />
            <IconCards title="Edit column" Icon={LuColumns3} border />
          </div>
          <div className="flex items-center gap-2 px-2 py-1 border rounded-md text-white bg-blue-600 text-sm">
            <VscFileSymlinkDirectory />
            <div className="flex items-center">
              <p className="opacity-40 text-sm">|</p>
              <FaChevronDown className="text-xs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
