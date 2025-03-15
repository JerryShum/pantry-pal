import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/recipes/$recipeID")({
  component: RouteComponent,
  loader: async ({ params }) => {
    const recipeID = params.recipeID;
    console.log(`Loading recipe with ID: ${recipeID}`);
  },
});

// Loader is an async function that is called before the route is loaded

function RouteComponent() {
  return <div>Hello "/recipes/$recipeID"!</div>;
}
