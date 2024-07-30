import { ReactNode } from "react";

export interface ChildProps {
  children: ReactNode;
}

export interface IProduct {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}
