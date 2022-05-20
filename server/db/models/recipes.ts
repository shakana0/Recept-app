import { Schema, model, Document } from "mongoose";

interface Ingredients {
  ingredient: string;
  amount: number;
  unit: string;
}

interface Comments extends Document {
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

// const ingredientsSchema = new Schema<Ingredients>({
//   ingredient: String,
//   amount: Number,
//   unit: String,
// });
// const IngredientsModel = model<Ingredients>("Ingredients", ingredientsSchema);

// const commentsSchema = new Schema<Comments>({
//   comment: { type: String, required: true },
//   name: { type: String, required: true },
//   createdAt: { type: Date, required: true },
// });
// const CommentsModel = model<Comments>("Comments", commentsSchema);

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
