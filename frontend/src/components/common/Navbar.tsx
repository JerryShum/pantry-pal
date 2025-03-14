import { Link } from "@tanstack/react-router";
export default function Navbar() {
  return (
    <nav className="flex gap-2 p-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{" "}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
      <Link to="/expenses" className="[&.active]:font-bold">
        Expenses
      </Link>
      <Link to="/create-expense" className="[&.active]:font-bold">
        Create Expenses
      </Link>
      <Link to="/profile" className="[&.active]:font-bold">
        Profile
      </Link>
    </nav>
  );
}
