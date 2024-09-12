import { BASE_URL } from "@/constants";
import UserCard from "./_components/UserCard";
import { IUser } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User profile",
};

async function Page() {
  const usersJSON = await fetch(`${BASE_URL}/users`);

  const { users } = await usersJSON.json();

  return (
    <section
      className="container py-12 mx-auto max-w-7xl"
      aria-labelledby="todos page"
    >
      <h1 className="text-center mb-8 max-md:text-2xl text-3xl text-muted-foreground">
        User's todos
      </h1>
      <div
        className="grid  md:grid-cols-2 lg:grid-cols-3 max-md:gap-3 gap-5"
        role="list"
        aria-label="list of users"
      >
        {users.map((user: IUser) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </section>
  );
}

export default Page;
