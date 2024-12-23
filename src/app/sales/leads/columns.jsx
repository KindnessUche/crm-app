"use client";
import { IoArrowDown, IoArrowUp } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export const columns = [
  {
    accessorKey: "name",
    id: "name",
    header: ({ table }) => (
      <div className="flex gap-3">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
        Name
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex gap-3">
        {" "}
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
        <div className="text-blue-500 ">{row.getValue("name")}</div>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "topic",
    header: "Topic",
  },
  {
    accessorKey: "status",
    header: "Status reason",
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          Created on
          <IoArrowUp
            className={`ml-2 h-4 w-4 ${
              column.getIsSorted() === "asc" ? "" : "hidden"
            }`}
          />
          <IoArrowDown
            className={`ml-2 h-4 w-4 ${
              column.getIsSorted() === "asc" ? "hidden" : "asc"
            }`}
          />
        </Button>
      );
    },
  },
];
