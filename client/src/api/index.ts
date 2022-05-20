import axios from "axios";
axios.defaults.baseURL = "http://localhost:3030";

export const getAllRecipes = async () => {
  try {
    const response = await axios.get("/recipes");
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const getAllCategories = async () => {
  try {
    const response = await axios.get("/category/category");
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const getSingleRecipe = async (recipeId: string) => {
  try {
    const response = await axios.get(`/recipes/${recipeId}`);
    // console.log(response)
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const getSingleCategory = async (category: string) => {
  try {
    const response = await axios.get(`/category/${category}`);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const getBySearchTitle = async (searchQuery: string) => {
  try {
    const response = await axios.get(`/recipes/search/${searchQuery}`);
    return response;
  } catch (error: any) {
    return error.response;
  }
};
// export async function getRecipesByCategoryAndSearch(
//   category: string,
//   searchQuery: string
// ) {
//   try {
//     const response = await axios.get(
//       `/category/${category}/recipes/?search=${searchQuery}`
//     );
//     return response;
//   } catch (error: any) {
//     return error.response;
//   }
// };
