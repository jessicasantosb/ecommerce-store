import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return <main className="mx-auto max-w-7xl">{children}</main>;
}
