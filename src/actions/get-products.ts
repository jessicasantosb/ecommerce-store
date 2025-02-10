import qs from "query-string";

import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  sizeId: string;
  colorId: string;
  categoryId: string;
  isFeatured: string;
}

export const getProduct = async (query: Query): Promise<Product> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      sizeId: query.sizeId,
      colorId: query.colorId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url);
  return res.json();
};
