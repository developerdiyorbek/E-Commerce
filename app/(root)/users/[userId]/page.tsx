import { BASE_URL } from "@/constants";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ITodo } from "@/types";
import TodoItem from "./_components/TodoItem";

interface Props {
  params: { userId: string };
}

async function Page({ params: { userId } }: Props) {
  const userJSON = await fetch(`${BASE_URL}/users/${userId}`);
  const userTodosJSON = await fetch(`${BASE_URL}/users/${userId}/todos`);

  const user = await userJSON.json();
  const { todos } = await userTodosJSON.json();

  return (
    <section className="container mx-auto max-w-7xl py-12">
      <div className="flex items-center space-x-6 mb-8">
        <Avatar className="size-10 md:size-16">
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
          <h1 className="text-2xl max-md:text-lg font-semibold">
            {user.firstName} {user.lastName}
          </h1>
          <p className="text-muted-foreground text-xs md:text-[14px]">
            {user.email}
          </p>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4">Todos</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {todos.length ? (
          todos.map((todo: ITodo) => <TodoItem todo={todo} key={todo.id} />)
        ) : (
          <div>Todos aren't available in this user</div>
        )}
      </div>
    </section>
  );
}

export default Page;
