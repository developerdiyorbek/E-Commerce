import { BASE_URL } from "@/constants";
import PageHeader from "../_components/PageHeader";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Separator } from "@/components/ui/separator";

async function Page() {
  const usersJSON = await fetch(`${BASE_URL}/users`);
  const { users } = await usersJSON.json();

  return (
    <>
      <PageHeader title="Users" description="All users are here" />
      <Separator className="my-5" />
      <DataTable columns={columns} data={users} />
    </>
  );
}

export default Page;
