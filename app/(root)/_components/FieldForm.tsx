import { Input } from "@/components/ui/input";
import { ErrorMessage, Field } from "formik";

interface Props {
  name: string;
  type?: string;
  placeholder: string;
}

function FieldForm({ name, type = "text", placeholder }: Props) {
  return (
    <div className="mb-5">
      <Field name={name} type={type} as={Input} placeholder={placeholder} />
      <ErrorMessage
        name={name}
        component="span"
        className="mt-1 block text-red-400 max-md:text-[12px]"
      />
    </div>
  );
}

export default FieldForm;
