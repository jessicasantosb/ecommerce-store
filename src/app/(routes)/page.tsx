import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";
import { Billboard } from "@/components/billboard";
import { ProductsList } from "@/components/products-list";
import { Container } from "@/components/ui/container";

export default async function Home() {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard(process.env.HOME_BILLBOARD_ID);

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:p-6 lg:px-8">
          <ProductsList items={products} title="Produtos em destaque" />
        </div>
      </div>
    </Container>
  );
}
