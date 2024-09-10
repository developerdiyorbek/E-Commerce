"use client";

import { Button } from "@/components/ui/button";
import { adminNavLinks } from "@/constants";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-0 mt-[10vh] h-[90vh] w-[300px] max-md:w-24">
      <div className="mt-6 px-4 max-md:px-2">
        <div className="flex flex-col space-y-3">
          {adminNavLinks.map((link) => (
            <Link href={link.route} key={link.route}>
              <Button
                className="flex w-full justify-start gap-2 max-md:w-fit max-md:justify-center"
                variant={pathname === link.route ? "secondary" : "ghost"}
              >
                <link.icon className="size-5 text-muted-foreground" />
                <span className="max-md:hidden">{link.name}</span>
              </Button>
            </Link>
          ))}
          <Button
            className="flex w-full justify-start gap-2 max-md:w-fit md:hidden"
            variant={"destructive"}
          >
            <Link href={"/"}>
              <LogOut className="size-5 dark:text-muted-foreground" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
