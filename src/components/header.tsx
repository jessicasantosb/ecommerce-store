import Link from "next/link";
import { Container } from "./ui/container";

export function Header() {
  return (
    <header className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href={"/"} className="ml-4 flex">
            <p className="font-bold text-xl">LOJA</p>
          </Link>
        </div>
      </Container>
    </header>
  );
}
