"use client";

import { getLoginUser } from "@/Query/queryFn";
import Image from "next/image";
import Loading from "../_components/Loading";

function Profile() {
  const { data: user, isLoading } = getLoginUser();

  if (isLoading) return <Loading />;

  return (
    <section
      className="container mx-auto py-5 md:py-10 max-w-7xl"
      aria-labelledby="profile page"
    >
      <h1 id="profile-heading" className="sr-only">
        User Profile
      </h1>
      <div className="flex max-md:flex-col md:space-x-20 max-md:space-y-9">
        <div className="relative size-52">
          <Image
            src={user.image}
            fill
            alt={`picture of ${user.firstName}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
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
