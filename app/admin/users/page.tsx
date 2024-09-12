import { BASE_URL } from "@/constants";
import PageHeader from "../_components/PageHeader";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Separator } from "@/components/ui/separator";
import AddUser from "./_components/AddUser";

async function Page() {
  const usersJSON = await fetch(`${BASE_URL}/users?limit=${50}`);

  const { users } = await usersJSON.json();

  return (
    <>
      <div className="flex items-center justify-between">
        <PageHeader title="Users" description="All users are here" />
        <AddUser />
      </div>
      <Separator className="my-5" />
      <DataTable columns={columns} data={users} />
    </>
  );
}

export default Page;
