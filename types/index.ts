import { ReactNode } from "react";

export interface ChildProps {
  children: ReactNode;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  discountPercentage: number;
  rating: number;
  images: string[];
}

export interface ICategory {
  name: string;
  slug: string;
  url: string;
}

export interface IUser {
  age: number;
  email: string;
  firstName: string;
  gender: string;
  image: string;
  lastName: string;
  password: string;
  phone: string;
}
