import axios from "axios";

import { Button } from "@/components/ui/button";
import { Currency } from "@/components/ui/currency";
import { useCart } from "@/hooks/use-cart";

export function Summary() {
  const items = useCart((state) => state.items);

  const totalPrice = items.reduce((acc, item) => {
    return acc + Number(item.price);
  }, 0);

  const handleCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productId: items.map((item) => item.id),
      }
    );

    window.location = response.data.url;
  };

  return (
    <div className="mt-15 lg:mt-0 px-4 py-6 sm:p-6 lg:p-8 rounded-lg bg-gray-50 lg:col-span-5">
      <h2 className="text-lg font-medium text-gray-900">Resumo do pedido</h2>
      <div className="mt-6 space-y-4">
        <div className="pt-4 flex items-center justify-between border-t border-gray-200">
          <div className="text-base font-medium text-gray-900">Valor total</div>

          <Currency value={totalPrice} />
        </div>
      </div>

      <Button onClick={handleCheckout} className="w-full mt-6">
        Finalizar
      </Button>
    </div>
  );
}
