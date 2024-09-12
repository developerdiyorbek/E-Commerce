"use client";

import { authStore } from "@/hooks/authStore";
import { getLoginUser } from "@/Query/queryFn";
import { useRouter } from "next/navigation";
import { Skeleton } from "../ui/skeleton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarImage } from "../ui/avatar";
import Link from "next/link";

function UserBox() {
  const router = useRouter();
  const { setIsAuth } = authStore();
  const { data: user, isLoading } = getLoginUser();

  if (isLoading)
    return <Skeleton className="size-10 rounded-full" aria-label="loading" />;

  // on Log Out
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    router.push("/login");
    setIsAuth(false);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar
          className="size-10 cursor-pointer"
          aria-label="User avatar, open menu"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <AvatarImage
            src={user.image}
            alt={`${user.firstName} ${user.lastName}'s avatar`}
            className="object-cover"
          />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="max-md:w-52 w-80"
        align="start"
        alignOffset={11}
        aria-label="User menu"
      >
        <DropdownMenuGroup>
          <div className="flex flex-col space-y-4 p-2">
            <div className="flex flex-col space-y-4 p-2">
              <p className="text-xs font-medium leading-none text-muted-foreground">
                {user.firstName} {user.lastName}
              </p>

              <div className="flex items-center gap-x-2">
                <div className="rounded-md bg-secondary p-1">
                  <Avatar className="size-8">
                    <AvatarImage
                      src={user.image}
                      alt={`${user.firstName} ${user.lastName}'s avatar`}
                    />
                  </Avatar>
                </div>

                <div className="space-y-1">
                  <p className="line-clamp-1 text-muted-foreground font-space-grotesk text-sm">
                    {user.username}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <DropdownMenuSeparator />
          <div className="flex flex-col space-y-2">
            <Link href={"/profile"}>
              <DropdownMenuItem
                className="w-full cursor-pointer text-muted-foreground"
                role="menuitem"
                aria-label="go to profile page"
              >
                Profile
              </DropdownMenuItem>
            </Link>
            <Link href={"/admin"} aria-label="go to admin page">
              <DropdownMenuItem
                className="w-full cursor-pointer text-muted-foreground"
                role="menuitem"
                aria-label="go to admin page"
              >
                Admin
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem
              className="w-full cursor-pointer text-muted-foreground"
              onClick={handleLogout}
              role="menuitem"
              aria-label="Log out"
            >
              Log Out
            </DropdownMenuItem>
          </div>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserBox;
