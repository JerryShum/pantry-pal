import { Link } from "@tanstack/react-router";
export default function Navbar() {
  return (
    <nav className="bg-background text-foreground flex gap-6 px-60 py-4 text-lg">
      <Link to="/" className="hover:underline [&.active]:font-bold">
        Home
      </Link>{" "}
      <Link to="/recipes" className="hover:underline [&.active]:font-bold">
        Recipes
      </Link>
    </nav>
  );
}
