import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IUser } from "@/types";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

function UserCard({ user }: { user: IUser }) {
  return (
    <Link
      href={`/users/${user.id}`}
      className="block hover:no-underline"
      aria-label={`View todos of ${user.firstName} ${user.lastName}`}
    >
      <Card className="hover:shadow-lg transition-shadow duration-200 border rounded-lg text-center">
        <CardHeader className="flex items-center">
          <Avatar
            className="w-12 h-12"
            aria-label={`${user.firstName} ${user.lastName}'s profile picture`}
          >
            <AvatarImage
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
            />
            <AvatarFallback>
              {user.firstName[0]}
              {user.lastName[0]}
            </AvatarFallback>
          </Avatar>

          <div>
            <CardTitle className="text-lg">
              {user.firstName} {user.lastName}
            </CardTitle>
            <CardDescription className="text-sm max-sm:text-[12px] text-muted-foreground line-clamp-1">
              {user.email}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p
            className="text-muted-foreground"
            aria-label={`${user.firstName}'s phone number`}
          >
            {user.phone}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default UserCard;
