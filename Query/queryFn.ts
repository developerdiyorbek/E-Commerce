"use client";

import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "./queryKey";
import { productUtils } from "@/service/product.service";

export const useProducts = function () {
  return useQuery({
    queryKey: [QUERY_KEY.products],
    queryFn: productUtils.getProducts,
  });
};
