import { Link } from "@tanstack/react-router";
export default function Navbar() {
  return (
    <nav className="flex gap-2 p-2 px-60">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{" "}
      <Link to="/recipes" className="[&.active]:font-bold">
        Recipes
      </Link>
    </nav>
  );
}
