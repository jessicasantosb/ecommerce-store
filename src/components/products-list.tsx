import { Product } from "@/types";
import { NoResults } from "./ui/no-results";

interface ProductListProps {
  title: string;
  items: Product[];
}

export function ProductsList({ title, items }: ProductListProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}
    </div>
  );
}
