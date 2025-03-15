import { Input } from "../UI/input";

export default function Searchbar() {
  return (
    <Input
      type="search"
      className="w-full p-4 text-lg font-semibold"
      placeholder="Search for recipes"
    />
  );
}
