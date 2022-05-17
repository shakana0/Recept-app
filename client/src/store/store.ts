import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from './RecipeSlice'
export default configureStore({
    reducer: {
        recipe: recipeReducer
    }
})