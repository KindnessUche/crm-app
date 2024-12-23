"use client";
import LeadsNav from "./LeadsNav";
import { DataTable } from "../sales/leads/data-table";
import { Payment, columns } from "../sales/leads/columns";
import { TableData } from "./index";
import { useState } from "react";

export default function LeadsWindow({ children }) {
  const [openActive, setOpenActive] = useState(true);
  const handleclick = () => setOpenActive((openActive) => !openActive);
  return (
    <div className="relative">
      <LeadsNav onClick={handleclick} openActive={openActive} />
      {children}
      {openActive && (
        <div className="text-slate-600 mt-4 border">
          <DataTable columns={columns} data={TableData} />
        </div>
      )}
    </div>
  );
}
