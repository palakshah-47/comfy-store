import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue
} from "@/components/ui/Select";

import { Label } from "@/components/ui/Label";
import { FormProps } from "@/utils";

type SelectInputProps = FormProps & {
  options: string[];
};

const FormSelect = ({
  label,
  name,
  options,
  defaultValue
}: SelectInputProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Select defaultValue={defaultValue || options[0]} name={name}>
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((item, index) => {
            return (
              <SelectItem key={`${index}-${item}`} value={item}>
                {item}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FormSelect;
