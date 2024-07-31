"use client";

import { getLoginUser } from "@/Query/queryFn";
import Image from "next/image";
import Loading from "../_components/Loading";

function Profile() {
  const { data: user, isLoading } = getLoginUser();

  if (isLoading) return <Loading />;

  console.log(user);

  return (
    <section className="container mx-auto py-5 md:py-10 max-w-7xl">
      <div className="flex max-md:flex-col md:space-x-20 max-md:space-y-9">
        <div className="relative size-52">
          <Image src={user.image} fill alt={user.firstName} />
        </div>
        <div>
          <h2>
            Full name :{" "}
            <span className="text-muted-foreground">
              {user.firstName} {user.lastName}
            </span>
          </h2>
          <p>
            Your username :{" "}
            <span className="text-muted-foreground">{user.username}</span>
          </p>
          <p>
            Your password :{" "}
            <span className="text-muted-foreground">{user.password}</span>
          </p>
          <p>
            Your role :{" "}
            <span className="text-muted-foreground">{user.role}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
