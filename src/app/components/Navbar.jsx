"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MenuItem from "./MenuItem";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlinePushpin } from "react-icons/ai";
import { layoutData } from "./index";
import MenuBlock from "./MenuBlock";
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);
  return (
    <div>
      <div
        className="px-3 py-2 cursor-pointer"
        onClick={() => setOpen((open) => !open)}
      >
        <AiOutlineMenu />
      </div>
      <MenuItem
        title={`${open ? "Home" : ""}`}
        address="/"
        Icon={AiOutlineHome}
      />
      <MenuItem
        title={`${open ? "Recent" : ""}`}
        address="/"
        Icon={AiOutlineClockCircle}
      />
      <MenuItem
        title={`${open ? "Pinned" : ""}`}
        address="/"
        Icon={AiOutlinePushpin}
      />
      {layoutData.map((item) => (
        <MenuBlock
          key={item.id}
          header={item.header}
          data={item.data}
          address={item.address}
          path={pathname}
          open={open}
        />
      ))}
    </div>
  );
}
