import {
  createSlice,
  createAsyncThunk,
  combineReducers,
} from "@reduxjs/toolkit";
import * as api from "../api/index";
import axios from "axios";
import { Recipe } from "../interface/recipes";

// import { combineReducers } from '@reduxjs/toolkit'
const rootReducer = combineReducers({});
export type RootState = ReturnType<typeof rootReducer>;

// axios.defaults.baseURL = "http://localhost:3030";

//https://redux-toolkit.js.org/api/createAsyncThunk

// const fetchAllRecipes = createAsyncThunk(
//   'http://localhost:3030',
//   async (thunkAPI) => {
//     const response = await axios.get("/recipes")
//     return response.data as Array<Recipe>
//   }
// )

// const fetchRecipes = createAsyncThunk("recipes/getRecipes", async (_, thunkAPI) => {
//   const state = thunkAPI.getState() as RootState
//   try {
//     const response = await axios.get("http://localhost:3030/recipes");
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// });
//recipes/getRecipes recipes är namnet på splicen, getrecipes är namnet på funktionen i extrareducers

const fetchRecipes = createAsyncThunk(
  "recipes/getRecipes",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const response = await axios.get("http://localhost:3030/recipes");
    return response as RootState
  }
);

interface RecipeState {
  recipeList: Array<Recipe>;
  count: number;
  loading: boolean;
}

const initialState: RecipeState = {
  recipeList: [],
  count: 0,
  loading: false,
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    getRecipes: (state) => {},
  //   extraReducers: (builder) => {
  //     builder.addCase(fetchRecipes.fulfilled, (state, action) => {
  //       state.recipeList.push(...action.payload);
  //       state.loading = false;
  //     });
  //   },
   },
  extraReducers: {
    // [fetchRecipes.pending]: (state, {payload}) =>{
    //   state.loading = true
    // },
    // [fetchRecipes.fulfilled]: (state, {payload}) =>{
    //   state.loading = false
    //   state.recipeList = payload
    // },
    // [fetchRecipes.rejected]: (state, {payload}) =>{
    //   state.loading = true
    // }
  }
});

export const {} = recipeSlice.actions;
export default recipeSlice.reducer;
