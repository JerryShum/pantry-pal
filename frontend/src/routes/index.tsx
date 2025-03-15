import Searchbar from "@/components/common/Searchbar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="bg-background h-full px-60 py-20">
      <header>
        <h1 className="text-foreground mb-10 text-center text-6xl">
          Pantry Pal
        </h1>
        <Searchbar />
      </header>
      <main>
        <div>
          <h2>Recipes</h2>
        </div>
      </main>
    </div>
  );
}
