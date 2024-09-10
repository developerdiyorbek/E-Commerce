import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ITodo } from "@/types";

function TodoItem({ todo }: { todo: ITodo }) {
  return (
    <Card key={todo.id} className="border rounded-lg">
      <CardHeader>
        <label
          className="flex items-center justify-between cursor-pointer"
          htmlFor={`todo${todo.id}`}
        >
          {todo.todo}
          <Checkbox
            id={`todo${todo.id}`}
            defaultChecked={todo.completed}
            className="size-5 max-md:size-4"
          />
        </label>
      </CardHeader>
      <CardContent>
        <p className="text-[11px] text-muted-foreground md:text-[13px]">
          {todo.completed ? "Todo is completed" : "Todo is uncompleted"}
        </p>
      </CardContent>
    </Card>
  );
}

export default TodoItem;
