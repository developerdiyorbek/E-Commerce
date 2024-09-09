"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

interface Props {
  isLogin: boolean | null;
}

function Mobile({ isLogin }: Props) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button
          size={"icon"}
          variant={"ghost"}
          aria-label="mobile-hamburger-menu"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetTitle></SheetTitle>
      <SheetDescription></SheetDescription>
      <SheetContent side={"left"} aria-describedby="mobile-menu-description">
        <SheetHeader>
          <div className="w-fit mx-auto">
            <Logo />
          </div>
          <Separator />
        </SheetHeader>
        <nav className="my-4 flex flex-col">
          {navLinks.map((nav) => (
            <Link
              href={`/${nav.route}`}
              key={nav.id}
              className="flex h-12 cursor-pointer items-center gap-2 rounded-sm px-3 transition-colors hover:bg-blue-400/20"
            >
              <nav.icon className="size-5" />
              <span>{nav.name}</span>
            </Link>
          ))}
        </nav>

        {!isLogin && (
          <Link href={"/login"}>
            <Button
              size={"lg"}
              className="transition-colors hover:bg-primary/80 w-full"
            >
              Login
            </Button>
          </Link>
        )}
      </SheetContent>
    </Sheet>
  );
}

export default Mobile;
