import customAxios from "@/configs/axios.config";

export const productService = {
  getProductById: async (id: number) => {
    const { data } = await customAxios.get(`products/${id}`);
    return data;
  },
};
