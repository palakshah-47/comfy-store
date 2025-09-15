import { useNavigation } from "react-router-dom";
import { Button } from "./ui/Button";
import { ReloadIcon } from "@radix-ui/react-icons";

export default function SubmitBtn({
  text,
  className
}: {
  text: string;
  className?: string;
}) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Button type="submit" className={className} disabled={isSubmitting}>
      {isSubmitting ? (
        <span className="flex items-center">
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin"></ReloadIcon>
        </span>
      ) : (
        text
      )}
    </Button>
  );
}
