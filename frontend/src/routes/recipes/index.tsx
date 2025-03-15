import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/recipes/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-2 px-60">
      <h1 className="text-2xl">Recipes</h1>
      <Link to="/recipes/$recipeID" params={{ recipeID: "1" }}>
        Recipe 1
      </Link>
    </div>
  );
}
