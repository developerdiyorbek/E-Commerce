import { Captions, Home, ListTodoIcon } from "lucide-react";

export const BASE_URL = "https://dummyjson.com";

export const navLinks = [
  { id: 1, route: "", name: "Home", icon: Home },
  { id: 2, route: "posts", name: "Posts", icon: Captions },
  { id: 3, route: "todos", name: "Todos", icon: ListTodoIcon },
];
