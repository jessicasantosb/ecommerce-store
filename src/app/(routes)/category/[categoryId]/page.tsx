import { getProducts } from "@/actions/get-products";

interface CategoryProps {
  params: { categoryId: string };
  searchParams: { colorId: string; sizeId: string };
}

export default async function Category({
  params,
  searchParams,
}: CategoryProps) {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  return (
    <main>
      <h3>Category</h3>
    </main>
  );
}
