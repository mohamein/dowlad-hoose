/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, FormField, FormItem, FormLabel } from "../../components/ui/form";
import { Input } from "../../components/ui/input";
// import { FormControl, FormField, FormItem, FormLabel } from "./ui/form";
// import { Input } from "./ui/input";

type FormFieldsProps = {
  label: string;
  placeholder?: string;
  type: "text" | "password" | "number" | "date" | "email" | "select";
  options?: { value: string; label: string }[];
  control: any;
  name: string;
};
const FormFields = ({
  label,
  placeholder,
  control,
  type,
  name,
}: FormFieldsProps) => {
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input type={type} placeholder={placeholder} {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </>
  );
};

export default FormFields;
