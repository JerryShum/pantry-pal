import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../UI/card";
import { Recipe } from "../../../../schema";

export default function RecipeCard({
  title,
  imageUrl,
  ingredients,
  description,
  instructions,
}: Recipe) {
  return (
    <Card className="border-muted-foreground border drop-shadow-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <img src={imageUrl ?? ""} alt={title} className="rounded-lg" />
          <div>
            <h2 className="text-lg font-semibold">Ingredients:</h2>
            <p className="capitalize">{ingredients}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Instructions:</h2>
            <p>{instructions}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
