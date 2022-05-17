import axios from "axios";
axios.defaults.baseURL = "http://localhost:3030";

export const getAllRecipes = async () => {
  return await axios.get("/recipes")
};
