import { useState, useEffect } from "react";
import * as api from "../../api/index";
import styled from "styled-components";
import { Category } from "@mui/icons-material";
import { Recipe } from "../../interface/recipes";
import { RecipeList } from "./RecipeList";
import {SearchBar} from '../Search/SearchBar'

const HomeStyle = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* overflow: scroll; */

`;

export const Home = () => {
  const [allRecipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    const loadRecipes = async () => {
      const res = await api.getAllRecipes();
      setRecipes(res.data);
    };
    loadRecipes();
  }, []);

  return (
    <>
    
      <HomeStyle>
        <SearchBar/>
        <RecipeList recipeList={allRecipes} />
      </HomeStyle>
    </>
  );
};
