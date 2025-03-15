import React from "react";
import { Card, CardContent, CardHeader } from "../UI/card";
import { Recipe } from "../../../../schema";

export default function RecipeCard({
  title,
  imageUrl,
  ingredients,
  description,
  instructions,
}: Recipe) {
  return (
    <Card>
      <CardHeader>
        <h2>{title}</h2>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <img src={imageUrl ?? ""} alt={title} />
          <p>Ingredients: {ingredients}</p>
          <p>{description}</p>
          <p>{instructions}</p>
        </div>
      </CardContent>
    </Card>
  );
}
