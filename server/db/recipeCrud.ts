import RecipeModel, { Recipe, Comments } from "./models/recipes";

export const postRecipe = async (recepie: Recipe) => {
  const newRecipe = new RecipeModel(recepie);
  if (!recepie) {
    throw "404";
  }
  await newRecipe.save();
  return newRecipe;
};

//hämtar alla recepten
export const getAllRecipes = async () => {
  const result = await RecipeModel.find({});
  return result;
};

export const getRecipeById = async (recipeId: string) => {
  const singleRecipe = await RecipeModel.findById({ _id: recipeId });
  return singleRecipe;
};

export const deleteRecipeById = async (recipeId: string) => {
  const singleRecipe = await RecipeModel.deleteOne({ _id: recipeId });
  return singleRecipe;
};

/*Category*/

//hämstar alla kategorier
export const getCategories = async () => {
  // return await RecipeModel.find().distinct("category");
  // categories = allRecipes.map((resipe) => resipe.category);
  const categories = await RecipeModel.aggregate([
    { $match: {} },
    { $unwind: "$category" },
    { $group: { _id: "$category", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
  ]);
  return categories;
};

//hämtar alla recepten för en kategori
export const getRecepiesCategory = async (category: string) => {
  const recipes = await RecipeModel.find({ category: category });
  return recipes;
};

//hämtar recept vid search
export const getRecipesBySearch = async (search: string) => {
  const recipes = await RecipeModel.find({
    title: { $regex: search, $options: "i" },
  });
  return recipes;
};

export const getRecipeInCategory = async (
  category: String,
  recipeTitle: String
) => {
  const foundRecipe = await RecipeModel.find({
    category: category,
    title: { $regex: recipeTitle, $options: "i" },
  });
  return foundRecipe;
};

export const postRating = async (recipeId: String, rating: Number) => {
  const newRating = await RecipeModel.findById(recipeId);
  if (!newRating) {
    throw "404";
  } else {
    newRating.ratings.push(rating);
    await newRating.save();
    return newRating;
  }
};

export const postComment = async (recipeId: String, comment: Comments) => {
  const newComment = await RecipeModel.findById(recipeId);
  if (!newComment) {
    throw "404";
  } else {
    newComment.comments.push(comment);
    await newComment.save();
    // console.log(comment)
    // console.log(newComment)
    return newComment;
  }
};
