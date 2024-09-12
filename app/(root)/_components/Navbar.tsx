"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import Mobile from "./Mobile";
import { navLinks } from "@/constants";
import ModeToggle from "@/components/shared/ModeToggle";
import { usePathname } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import { Skeleton } from "@/components/ui/skeleton";
import { authStore } from "@/hooks/authStore";
import UserBox from "@/components/shared/UserBox";
import Logo from "@/components/shared/Logo";

function Navbar() {
  const { isAuth, isLoading } = authStore();

  const { cartsLength } = useCart();

  const pathname = usePathname();

  return (
    <header className="fixed inset-0 z-40 h-20 bg-background/70 backdrop-blur-xl border-b">
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo />
          <nav
            className="hidden items-center gap-3 border-l pl-2 md:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((nav) => (
              <Link
                href={`/${nav.route}`}
                key={nav.id}
                aria-label={nav.name}
                className={`flex h-10 cursor-pointer items-center gap-2 rounded-md px-3 transition-colors hover:bg-blue-400/20 ${
                  nav.route === pathname.slice(1) && "bg-blue-400/20"
                } `}
              >
                {nav.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 md:border-r md:pr-3">
            <Button
              size={"icon"}
              variant={cartsLength() ? "secondary" : "outline"}
              className="relative"
              aria-label="View shopping cart"
            >
              <Link
                href={"/shoppingcart"}
                aria-label="go to shopping cart page"
              >
                <ShoppingCart />
                {cartsLength() ? (
                  <div
                    className="absolute -right-3 -top-2 flex size-6 items-center justify-center rounded-full bg-destructive"
                    aria-label={`You have ${cartsLength()} items in your cart`}
                  >
                    {cartsLength()}
                  </div>
                ) : null}
              </Link>
            </Button>
            <ModeToggle aria-label="Toggle light/dark mode" />
            <Mobile isLogin={isAuth} />
          </div>
          {!isAuth ? (
            <Link href={"/login"}>
              <Button
                aria-label="go to login page"
                size={"lg"}
                className="hidden md:flex transition-colors hover:bg-primary/80"
              >
                Login
              </Button>
            </Link>
          ) : isLoading ? (
            <Skeleton
              className="size-10 rounded-md"
              aria-label="Loading user data"
            />
          ) : (
            <UserBox aria-label="User menu" />
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
