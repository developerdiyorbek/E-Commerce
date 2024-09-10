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
  id: number;
  age: number;
  email: string;
  firstName: string;
  gender: string;
  image: string;
  lastName: string;
  password: string;
  phone: string;
}

export interface CategoryProps {
  params: { categoryId: string };
}

export interface IPost {
  body: string;
  id: number;
  reactions: {
    dislikes: number;
    likes: number;
  };
  title: string;
  views: string;
}

export interface IComment {
  id: number;
  body: string;
  postId: string;
  likes: number;
  user: {
    username: string;
  };
}

export interface ITodo {
  id: number;
  todo: string;
  completed: boolean;
}
