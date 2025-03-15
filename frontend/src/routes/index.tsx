import Searchbar from "@/components/common/Searchbar";
import { createFileRoute } from "@tanstack/react-router";
import { Recipe } from "../../../schema";
import RecipeCard from "@/components/common/RecipeCard";

const dummyRecipes: Recipe[] = [
  {
    id: 1,
    title: "Pasta with Tomato Sauce",
    description: "A classic Italian dish",
    ingredients: "pasta, tomato sauce, mozzarella cheese, basil",
    instructions: "1. Boil the pasta\n2. Prepare the sauce\n3. Combine both",
    imageUrl: "https://picsum.photos/512/384",
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
  },
  {
    id: 2,
    title: "Grilled Cheese Sandwich",
    description: "A simple but satisfying snack",
    ingredients: "bread, cheese, butter",
    instructions:
      "1. Butter the bread\n2. Place the cheese\n3. Grill until golden",
    imageUrl: "https://picsum.photos/512/384",
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
  },
  {
    id: 3,
    title: "Salad with Avocado Dressing",
    description: "A fresh and healthy salad",
    ingredients: "greens, avocado, cherry tomatoes, red onion, dressing",
    instructions:
      "1. Combine greens and veggies\n2. Make the dressing\n3. Combine both",
    imageUrl: "https://picsum.photos/512/384",
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
  },
  {
    id: 4,
    title: "Spaghetti Bolognese",
    description: "A classic Italian dish",
    ingredients: "spaghetti, tomato sauce, ground beef, onion, garlic",
    instructions:
      "1. Boil the spaghetti\n2. Prepare the sauce\n3. Combine both",
    imageUrl: "https://picsum.photos/512/384",
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
  },
];

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground h-full px-60 py-10">
      <header className="flex flex-col items-center">
        <h1 className="text-primary mb-10 text-center text-6xl font-semibold">
          Pantry Pal
        </h1>
        <Searchbar />
      </header>
      <main className="mt-20 flex flex-col justify-center">
        <h2 className="text-muted-foreground text-center text-2xl">
          Other Recipes You Might Enjoy!
        </h2>
        <div className="mt-10 grid grid-cols-4 gap-10">
          {dummyRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </main>
    </div>
  );
}
