"use client";

import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "./queryKey";
import { userService } from "@/service/user.service";
import { productService } from "@/service/product.service";

export const getLoginUser = () =>
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useQuery({
    queryKey: [QUERY_KEY.user],
    queryFn: userService.getAuthUser,
  });

export const getProduct = (id: number) =>
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useQuery({
    queryKey: ["product", id],
    queryFn: async () => await productService.getProductById(id),
  });
