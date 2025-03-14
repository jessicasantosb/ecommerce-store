import { getCategory } from "@/actions/get-category";
import { getColors } from "@/actions/get-colors";
import { getProducts } from "@/actions/get-products";
import { getSizes } from "@/actions/get-sizes";
import { Billboard } from "@/components/billboard";
import { Container } from "@/components/ui/container";
import { NoResults } from "@/components/ui/no-results";

import { ProductCard } from "@/components/ui/product-card";
import { Filter } from "./components/filter";
import { MobileFilters } from "./components/mobile-filters";

interface CategoryProps {
  params: Promise<{ categoryId: string }>;
  searchParams: Promise<{ colorId: string; sizeId: string }>;
}

export default async function Category({
  params,
  searchParams,
}: CategoryProps) {
  const { categoryId } = await params;
  const { colorId, sizeId } = await searchParams;

  const products = await getProducts({ categoryId, colorId, sizeId });
  const colors = await getColors();
  const sizes = await getSizes();
  const category = await getCategory(categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Tamanhos" data={sizes} />
              <Filter valueKey="colorId" name="Cores" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
