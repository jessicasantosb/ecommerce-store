"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "BRL",
});

export function Currency({ value }: { value: string | number }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <span className="font-semibold">{formatter.format(Number(value))}</span>;
}
