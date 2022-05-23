import { Schema, model } from "mongoose";

interface Ingredients {
  ingredient: string;
  amount: number;
  unit: string;
}

export interface Comments{
  comment: string;
  name: string;
  createdAt: Date;
}

export interface Recipe {
  title: string;
  description: string;
  imageUrl: string;
  timeInMins: number;
  ratings: Array<Number>;
  category: Array<string>;
  ingredients: Array<Ingredients>;
  instructions: Array<string>;
  comments: Array<Comments>;
}

const schema = new Schema<Recipe>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  timeInMins: { type: Number, required: true },
  ratings: { type: [Number], required: true },
  category: { type: [String], required: true },
  ingredients:  { type: [Object], required: true },
  instructions: { type: [String], required: true },
  comments: { type: [Object], required: true },
});

const RecipeModel = model<Recipe>("Recipe", schema);
export default RecipeModel;
