import { create } from "zustand";

interface IAuthStore {
  isLoading: boolean;
  isAuth: boolean;
  setLoading: (loading: boolean) => void;
  setIsAuth: (isAuth: boolean) => void;
}

export const authStore = create<IAuthStore>((set) => ({
  isLoading: false,
  isAuth: false,
  setLoading: (loading) => set({ isLoading: loading }),
  setIsAuth: (isAuth: boolean) => set({ isAuth }),
}));
