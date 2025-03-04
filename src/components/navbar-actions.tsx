"use client";

import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

import { useCart } from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export function NavbarActions() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { push } = useRouter();
  const { items } = useCart();

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {items.length}
        </span>
      </Button>
    </div>
  );
}
