import customAxios from "@/configs/axios.config";

export const userService = {
  getAuthUser: async () => {
    const { data } = await customAxios.get("/auth/me");
    return data;
  },
};
