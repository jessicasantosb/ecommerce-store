'use client'

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Category } from "@/types";

interface NavbarProps {
  data: Category[];
}

export function Navbar({ data }: NavbarProps) {
  const pathname = usePathname();

  const routes = data.map(({ id, name }) => ({
    href: `/category/${id}`,
    label: name,
    active: pathname === `/category/${id}`,
  }));

  return (
    <nav className="mx-6 flex items-center space-x-4 large:space-x-6">
      {routes.map(({ label, href, active }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black",
            active ? "text-black" : "text-neutral-500"
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
