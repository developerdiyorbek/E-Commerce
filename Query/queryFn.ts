"use client";

import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "./queryKey";
import { userService } from "@/service/user.service";
import { IUser } from "@/types";

export const getLoginUser = function () {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery({
    queryKey: [QUERY_KEY.user],
    queryFn: userService.getAuthUser,
  });
};
