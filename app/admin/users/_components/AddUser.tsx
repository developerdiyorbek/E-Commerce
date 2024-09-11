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
import { addUserSchema } from "@/lib/validation";
import { ErrorMessage, Form, Formik } from "formik";

const initialValues = {
  username: "",
  name: "",
  gender: "",
  birthdate: "",
};

interface FormProps {
  username: string;
  name: string;
  gender: string;
  birthdate: string;
}

function AddUser() {
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
        <Button variant={"default"}>Add User</Button>
      </DialogTrigger>
      <DialogContent className="w-[90%]">
        <DialogHeader>
          <DialogTitle>Add User Modal</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Formik
          initialValues={initialValues}
          validationSchema={addUserSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              <FieldForm name="name" placeholder="Enter your name" />
              <FieldForm name="username" placeholder="Enter your username" />
              <FieldForm
                name="birthdate"
                placeholder="Enter your birthdate"
                type="date"
              />
              <Select onValueChange={(value) => setFieldValue("gender", value)}>
                <SelectTrigger
                  defaultValue={""}
                  className="w-full"
                  name="gender"
                >
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
              <ErrorMessage
                name="gender"
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

export default AddUser;
