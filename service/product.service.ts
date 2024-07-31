import customAxios from "@/configs/axios.config";

export const productService = {
  getProductsByCategory: async (category: string) => {
    const { data } = await customAxios.get(`products/category/${category}`);
    return data;
  },
  getProductById: async (id: number) => {
    const { data } = await customAxios.get(`products/${id}`);
    return data;
  },
};
