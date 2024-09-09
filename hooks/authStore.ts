import { IUser } from "@/types";
import { create } from "zustand";

interface IAuthStore {
  isLoading: boolean;
  isAuth: boolean;
  user: IUser;
  setUser: (user: IUser) => void;
  setLoading: (loading: boolean) => void;
  setIsAuth: (isAuth: boolean) => void;
}

export const authStore = create<IAuthStore>((set) => ({
  isLoading: false,
  isAuth: false,
  user: {} as IUser,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ isLoading: loading }),
  setIsAuth: (isAuth: boolean) => set({ isAuth }),
}));
