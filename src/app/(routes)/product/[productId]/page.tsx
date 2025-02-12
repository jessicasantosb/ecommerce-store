import { getProduct } from "@/actions/get-product";
import { getProducts } from "@/actions/get-products";
import { ProductsList } from "@/components/products-list";
import { Container } from "@/components/ui/container";

export default async function Product({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const product = await getProduct(productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  return (
    <main className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <h4>Galeria</h4>
            <p className="px-4 sm:px-0 mt-10 sm:mt-16 lg:mt-0">Informações</p>
          </div>
          <hr className="my-10" />
          <ProductsList
            title="Produtos relacionados"
            items={suggestedProducts}
          />
        </div>
      </Container>
    </main>
  );
}
