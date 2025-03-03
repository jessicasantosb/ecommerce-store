"use cliente";

import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Currency } from "@/components/ui/currency";
import { Product } from "@/types";

interface InfoProps {
  data: Product;
}

export function Info({ data }: InfoProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 ">{data.name}</h1>
      <div className="mt-3 flex items-center justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Tamanho:</h3>
          <div>{data.size.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="flex gap-1 font-semibold text-black">Cor:</h3>
          <div
            className="size-6 rounded-full border"
            style={{ backgroundColor: data.color.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2">
          Adicionar ao carrinho <ShoppingCart />
        </Button>
      </div>
    </div>
  );
}
