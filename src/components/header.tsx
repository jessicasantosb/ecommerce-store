import { getCategories } from "@/actions/categories";
import Link from "next/link";
import { Navbar } from "./navbar";
import { NavbarActions } from "./navbar-actions";
import { Container } from "./ui/container";

export async function Header() {
  const categories = await getCategories();

  return (
    <header className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href={"/"} className="ml-4 flex">
            <p className="font-bold text-xl">LOJA</p>
          </Link>
          <Navbar data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </header>
  );
}
