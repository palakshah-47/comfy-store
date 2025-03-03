import { Label } from "@/components/ui/Label";
import { Checkbox } from "@/components/ui/Checkbox";
import { FormProps } from "@/utils";

export default function FormCheckbox({
  label,
  name,
  defaultValue
}: FormProps) {
  const defaultChecked = defaultValue === "on" ? true : false;
  return (
    <div className="mb-2 flex justify-between self-end">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
    </div>
  );
}
