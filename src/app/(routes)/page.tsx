import { getBillboard } from "@/actions/billboard";
import { Billboard } from "@/components/billboard";
import { Container } from "@/components/ui/container";

export default async function Home() {
  const billboard = await getBillboard("641bcb71-8cc7-422b-b021-8a3a28dcc278");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
}
