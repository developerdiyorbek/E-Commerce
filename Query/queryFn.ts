"use client";

import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "./queryKey";
import { userService } from "@/service/user.service";
import { productService } from "@/service/product.service";

export const getLoginUser = () =>
  useQuery({
    queryKey: [QUERY_KEY.user],
    queryFn: userService.getAuthUser,
  });

export const getProduct = (id: number) =>
  useQuery({
    queryKey: ["product", id],
    queryFn: async () => await productService.getProductById(id),
  });
