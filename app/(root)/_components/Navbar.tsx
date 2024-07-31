"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import Mobile from "./Mobile";
import { navLinks } from "@/constants";
import ModeToggle from "@/components/shared/ModeToggle";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import UserBox from "./UserBox";

function Navbar() {
  const [isLogin, setIsLogin] = useState<boolean>(() => {
    const token = localStorage.getItem("token");
    return !!token;
  });

  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("token") as string;
    const isLogin = !!token;
    setIsLogin(isLogin);
  }, [pathname]);

  return (
    <header className="fixed inset-0 z-40 h-20 bg-background/70 backdrop-blur-xl border-b">
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo />
          <nav className="hidden items-center gap-3 border-l pl-2 md:flex">
            {navLinks.map((nav) => (
              <Link
                href={`/${nav.route}`}
                key={nav.id}
                className="flex h-10 cursor-pointer items-center gap-2 rounded-md px-3 transition-colors hover:bg-blue-400/20"
              >
                {nav.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 md:border-r md:pr-3">
            <Button size={"icon"} variant={"outline"}>
              <Link href={"/shoppingcart"}>
                <ShoppingCart />
              </Link>
            </Button>
            <ModeToggle />
            <Mobile isLogin={isLogin} />
          </div>
          {isLogin ? (
            <UserBox />
          ) : (
            <Link href={"/login"}>
              <Button
                size={"lg"}
                className="hidden md:flex transition-colors hover:bg-primary/80"
              >
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
