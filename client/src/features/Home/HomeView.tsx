import { useState, useEffect } from "react";
import * as api from "../../api/index";
import styled from "styled-components";
import { Recipe } from "../../interface/recipes";
import { RecipeList } from "./RecipeList";
import { SearchBar } from "../Search/SearchBar";

const HomeStyle = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Home = () => {
  const [allRecipes, setRecipes] = useState<Recipe[]>([]);
  const [inputValue, setInputValue] = useState("");

  const changeText = (event: any) => setInputValue(event.target.value);

  useEffect(() => {
    const loadRecipes = async () => {
      if (inputValue.length > 0) {
        const res = await api.getBySearchTitle(inputValue);
        setRecipes(res.data);
      } else {
        const res = await api.getAllRecipes();
        setRecipes(res.data);
      }
    };
    loadRecipes();
  }, [inputValue]);

  return (
    <>
      <HomeStyle>
        <SearchBar changeText={changeText} />
        <RecipeList recipeList={allRecipes} />
      </HomeStyle>
    </>
  );
};
