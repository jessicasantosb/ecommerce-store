"use client";

import { useEffect, useState } from "react";

import { Container } from "@/components/ui/container";
import { useCart } from "@/hooks/use-cart";

import { CartItem } from "./components/cart-item";
import { Summary } from "./components/summary";

export default function Cart() {
  const [isMounted, setIsMounted] = useState(false);

  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="bg-white">
      <Container>
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-black">Seu carrinho</h3>

          <div className="mt-12 lg:grid lg:grid-cols-2 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="text-neutral-500">
                  Nenhum item foi adicionado ainda.
                </p>
              )}

              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>

            <Summary />
          </div>
        </div>
      </Container>
    </main>
  );
}
