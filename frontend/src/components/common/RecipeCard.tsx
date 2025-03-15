import React from "react";
import { Card, CardContent, CardHeader } from "../UI/card";
import { Recipe } from "../../../../schema";

export default function RecipeCard({ recipe }: Recipe) {
  return (
    <Card>
      <CardHeader>
        <h2>{recipe.title}</h2>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <img src={recipe.imageUrl} alt={recipe.title} />
          <p>Ingredients: {recipe.ingredients.join(", ")}</p>
        </div>
      </CardContent>
    </Card>
  );
}
