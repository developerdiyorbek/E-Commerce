"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";

export type IUser = {
  id: string;
  name: string;
  gender: string;
  username: string;
  birthdate: string;
  firstName: string;
};

export const columns: ColumnDef<IUser>[] = [
  {
    accessorKey: "firstName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "birthDate",
    header: "Birthdate",
    cell: ({ row }) => {
      const birthDate = row.getValue<string>("birthDate");
      const date = new Date(birthDate);
      const formatted = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(date);

      return <div className="font-medium">{formatted}</div>;
    },
  },
];
