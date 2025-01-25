import { Separator } from "./ui/Separator";
function SectionTitle({ text }: { text: string }) {
  return (
    <div>
      <h2 className="text-3xl font-medium tracking-wide capitalize mb-8">
        {text}
      </h2>
      <Separator />
    </div>
  );
}
export default SectionTitle;
