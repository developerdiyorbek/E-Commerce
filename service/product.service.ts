import customAxios from "@/configs/axios.config";

export const productUtils = {
  getProducts: async () => {
    const { data } = await customAxios.get("products");
    return data;
  },
};
