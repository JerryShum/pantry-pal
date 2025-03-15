import { Input } from "../UI/input";

export default function Searchbar() {
  return (
    <Input
      type="search"
      className="text-foreground border-border w-full max-w-2xl border-2 p-4 text-lg font-semibold"
      placeholder="Search for recipes"
    />
  );
}
