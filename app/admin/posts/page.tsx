import { BASE_URL } from "@/constants";
import PageHeader from "../_components/PageHeader";
import AddPost from "./_components/AddPost";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Separator } from "@/components/ui/separator";

async function Page() {
  const postsJSON = await fetch(`${BASE_URL}/posts`);
  const { posts } = await postsJSON.json();

  return (
    <>
      <div className="flex items-center justify-between">
        <PageHeader title="Posts" description="Here is latest posts" />
        <AddPost />
      </div>

      <Separator className="my-5" />
      <DataTable columns={columns} data={posts} />
    </>
  );
}

export default Page;
