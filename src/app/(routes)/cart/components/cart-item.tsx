"use client";

import { X } from "lucide-react";
import Image from "next/image";

import { Currency } from "@/components/ui/currency";
import { IconButton } from "@/components/ui/icon-button";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/types";

interface CartItemProps {
  data: Product;
}

export function CartItem({ data }: CartItemProps) {
  const { removeItem } = useCart();

  return (
    <li className="flex py-6 border-b">
      <div className="size-24 sm:size-48 relative rounded-md overflow-hidden">
        <Image
          fill
          src={data.images[0].url}
          alt="produto"
          className="object-cover object-center"
        />
      </div>

      <div className="relative ml-4 sm:ml-6 flex flex-1 flex-col justify-between">
        <div className="absolute top-0 right-0 z-10">
          <IconButton
            icon={<X size={15} onClick={() => removeItem(data.id)} />}
          />
        </div>

        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>

          <div className="mt-1 flex text-sm text-gray-500">
            <p>{data.color.name}</p>
            <p className="ml-4 pl-4 border-1 border-gray-200">
              {data.size.name}
            </p>
          </div>

          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
}
