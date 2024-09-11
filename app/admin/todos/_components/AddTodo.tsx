"use client";

import FieldForm from "@/components/shared/FieldForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addTodoSchema } from "@/lib/validation";
import { ErrorMessage, Form, Formik } from "formik";

const initialValues = {
  todo: "",
  userId: "",
};

interface FormProps {
  todo: string;
  userId: string;
}

function AddTodo() {
  const handleSubmit = async (
    values: FormProps,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log(values);

    resetForm();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"default"}>Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="w-[90%]">
        <DialogHeader>
          <DialogTitle>Add Todo Modal</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Formik
          initialValues={initialValues}
          validationSchema={addTodoSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              <FieldForm name="todo" placeholder="Enter todo title" />
              <Select onValueChange={(value) => setFieldValue("userId", value)}>
                <SelectTrigger
                  defaultValue={""}
                  className="w-full"
                  name="userId"
                >
                  <SelectValue placeholder="Author" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Emilys">Emilys</SelectItem>
                  <SelectItem value="Michael">Michael</SelectItem>
                  <SelectItem value="Sophia">Sophia</SelectItem>
                  <SelectItem value="James">James</SelectItem>
                </SelectContent>
              </Select>
              <ErrorMessage
                name="userId"
                component="span"
                className="my-2 block text-red-400 max-md:text-[12px]"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="ml-auto block mt-2"
                variant={"outline"}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}

export default AddTodo;
