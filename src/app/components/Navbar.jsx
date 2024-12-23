"use client";
import { usePathname } from "next/navigation";
import MenuItem from "./MenuItem";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlinePushpin } from "react-icons/ai";
import { layoutData } from "./index";
import MenuBlock from "./MenuBlock";
export default function Navbar() {
  const pathname = usePathname();

  return (
    <div>
      <MenuItem address="./" Icon={AiOutlineMenu} />
      <MenuItem title="Home" address="./" Icon={AiOutlineHome} />
      <MenuItem title="Recent" address="./" Icon={AiOutlineClockCircle} />
      <MenuItem title="Pinned" address="./" Icon={AiOutlinePushpin} />
      {layoutData.map((item) => (
        <MenuBlock
          key={item.id}
          header={item.header}
          data={item.data}
          address={item.address}
          path={pathname}
        />
      ))}
    </div>
  );
}
