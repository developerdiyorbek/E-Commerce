import customAxios from "@/configs/axios.config";

export const productService = {
  getProductsByCategory: async (category: string) => {
    const { data } = await customAxios.get(`products/category/${category}`);
    return data;
  },
};
