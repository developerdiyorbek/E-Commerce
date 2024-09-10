import {
  Captions,
  ClipboardCheck,
  Home,
  ListTodoIcon,
  StickyNote,
  Users,
} from "lucide-react";

export const BASE_URL = "https://dummyjson.com";

export const navLinks = [
  { id: 1, route: "", name: "Products", icon: Home },
  { id: 2, route: "posts", name: "Posts", icon: Captions },
  { id: 3, route: "todos", name: "Todos", icon: ListTodoIcon },
];

export const adminNavLinks = [
  { id: 1, route: "/admin", name: "Dashboard", icon: Home },
  { id: 2, route: "/admin/todos", name: "Todos", icon: ClipboardCheck },
  { id: 3, route: "/admin/posts", name: "Posts", icon: StickyNote },
  { id: 4, route: "/admin/users", name: "Users", icon: Users },
];
