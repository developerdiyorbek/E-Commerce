import { BASE_URL } from "@/constants";
import PageHeader from "../_components/PageHeader";
import { Separator } from "@/components/ui/separator";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import AddTodo from "./_components/AddTodo";

async function Page() {
  const todosJSON = await fetch(`${BASE_URL}/todos`);
  const { todos } = await todosJSON.json();

  return (
    <>
      <div className="flex items-center justify-between">
        <PageHeader title="Todos" description="Here is latest todos" />
        <AddTodo />
      </div>
      <Separator className="my-5" />
      <DataTable columns={columns} data={todos} />
    </>
  );
}

export default Page;
