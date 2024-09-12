import { BASE_URL } from "@/constants";
import PageHeader from "../_components/PageHeader";
import StatisticsCard from "./_components/StatisticsCard";
import { ClipboardCheck, StickyNote, Users } from "lucide-react";

async function Page() {
  const usersJSON = await fetch(`${BASE_URL}/users?limit=${50}`);
  const todosJSON = await fetch(`${BASE_URL}/todos?limit=${35}`);
  const postsJSON = await fetch(`${BASE_URL}/posts?limit=${70}`);

  const { users } = await usersJSON.json();
  const { todos } = await todosJSON.json();
  const { posts } = await postsJSON.json();

  return (
    <>
      <PageHeader
        title="Admin Dashbaord"
        description="Welcome to your dashboard"
      />
      <div className="mt-4 grid grid-cols-3 gap-4 max-md:grid-cols-1">
        <StatisticsCard label="Users" Icon={Users} value={`${users.length}`} />
        <StatisticsCard
          label="Todos"
          Icon={ClipboardCheck}
          value={`${todos.length}`}
        />
        <StatisticsCard
          label="Posts"
          Icon={StickyNote}
          value={`${posts.length}`}
        />
      </div>
    </>
  );
}

export default Page;
