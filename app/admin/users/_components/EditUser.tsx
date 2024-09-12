import FieldForm from "@/components/shared/FieldForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { editUserSchema } from "@/lib/validation";
import { ErrorMessage, Form, Formik } from "formik";
import { IUser } from "../columns";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  user: IUser;
  onSave: (user: IUser) => void;
}

function EditUser({ isOpen, onClose, user, onSave }: Props) {
  const handleSubmit = async (values: any) => {
    onSave(values);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90%]">
        <DialogHeader>
          <DialogTitle>Edit User Modal</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Formik
          initialValues={{
            name: `${user.firstName}`,
            gender: `${user.gender}`,
            birthdate: "",
          }}
          validationSchema={editUserSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              <FieldForm name="name" placeholder="Edit your name" />
              <FieldForm
                name="birthdate"
                placeholder="Edit your birthdate"
                type="date"
              />
              <Select onValueChange={(value) => setFieldValue("gender", value)}>
                <SelectTrigger
                  defaultValue={`${user.gender}`}
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
                Save
              </Button>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}

export default EditUser;
