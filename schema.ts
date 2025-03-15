// src/db/schema.js
import type { InferSelectModel } from 'drizzle-orm';
import {
   sqliteTable,
   text,
   integer,
   primaryKey,
} from 'drizzle-orm/sqlite-core';

// Recipes Table
export const recipes = sqliteTable('recipes', {
   id: integer('id').primaryKey({ autoIncrement: true }), // Auto-incrementing ID
   title: text('title').notNull(), // Recipe title
   description: text('description'), // Short description of the recipe
   ingredients: text('ingredients').notNull(), // List of ingredients
   instructions: text('instructions').notNull(), // Step-by-step instructions
   imageUrl: text('image_url'), // URL for the recipe image
   createdAt: integer('created_at', { mode: 'timestamp' }).notNull(), // Timestamp for creation
   updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(), // Timestamp for last update
});

// Ingredients Table
export const ingredients = sqliteTable('ingredients', {
   id: integer('id').primaryKey({ autoIncrement: true }), // Auto-incrementing ID
   name: text('name').notNull(), // Ingredient name
   quantity: text('quantity'), // Quantity (e.g., "1 cup", "2 tbsp")
   recipeId: integer('recipe_id') // Foreign key to the recipes table
      .notNull()
      .references(() => recipes.id, { onDelete: 'cascade' }), // Cascade delete if recipe is deleted
});

// Favorites Table
export const favorites = sqliteTable('favorites', {
   id: integer('id').primaryKey({ autoIncrement: true }), // Auto-incrementing ID
   recipeId: integer('recipe_id') // Foreign key to the recipes table
      .notNull()
      .references(() => recipes.id, { onDelete: 'cascade' }), // Cascade delete if recipe is deleted
   userId: integer('user_id').notNull(), // User ID (for future user authentication)
   createdAt: integer('created_at', { mode: 'timestamp' }).notNull(), // Timestamp for creation
});

export type Recipe = InferSelectModel<typeof recipes>;
export type Ingredient = InferSelectModel<typeof ingredients>;
export type Favorite = InferSelectModel<typeof favorites>;
