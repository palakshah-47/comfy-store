import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { FormProps } from "@/utils";

type FormInputProps = FormProps & {
  type: string;
};

export default function FormInput({
  label,
  name,
  type,
  defaultValue
}: FormInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
      ></Input>
    </div>
  );
}
