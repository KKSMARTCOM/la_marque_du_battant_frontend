"use client";

import Delete from "@/components/custom ui/Delete";
import { ColumnDef } from "@tanstack/react-table";

import Link from "next/link";

export const columns: ColumnDef<ProductType>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <Link href={`/products/${row.original._id}`} className="hover:text-black">
        {row.original.title}
      </Link>
    ),
  },
  {
    accessorKey: "category",
    header: "Categorie",
  },
  {
    accessorKey: "collections",
    header: "Collections",
    cell: ({ row }) =>
      row.original.collections.map((collection) => collection.title).join(", "),
  },
  {
    accessorKey: "price",
    header: "Prix ($)",
  },
  {
    accessorKey: "expense",
    header: "Frais ($)",
  },
  {
    id: "actions",
    cell: ({ row }) => <Delete item="product" id={row.original._id} />,
  },
];