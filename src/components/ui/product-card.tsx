"use client";

import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";

import { Product } from "@/types";

import { Currency } from "./currency";
import { IconButton } from "./icon-button";

export function ProductCard({ data }: { data: Product }) {
  return (
    <div className="group space-x-4 p-3 bg-white cursor-pointer rounded-xl border">
      <div className="relative aspect-square rounded-xl bg-gray-100">
        <Image
          alt="produto"
          src={data?.images?.[0]?.url}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="absolute transition w-full px-6 bottom-5 opacity-0 group-hover:opacity-100">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} />}
              className="text-gray-600"
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} />}
              className="text-gray-600"
            />
          </div>
        </div>
      </div>

      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>

      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
}
