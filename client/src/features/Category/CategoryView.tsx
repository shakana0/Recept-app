import { useState, useEffect } from "react";
import * as api from "../../api/index";
import styled from "styled-components";
import { useParams } from "react-router";
import { RecipeList } from "../Home/RecipeList";
import { SearchBar } from "../Search/SearchBar";

const ListStyle = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CategoryView = () => {
  const [category, setCategory] = useState<any>([]);
  const [inputValue, setInputValue] = useState("");
  const changeText = (event: any) => setInputValue(event.target.value);

  const { categoryName }: any = useParams();
  useEffect(() => {
    const loadRecipes = async () => {
      if (inputValue.length > 0) {
        const res = await api.getRecipesByCategoryAndSearch(
          categoryName,
          inputValue
        );
        setCategory(res.data);
      } else {
        const res = await api.getSingleCategory(categoryName);
        setCategory(res.data);
      }
    };
    loadRecipes();
  }, [inputValue, categoryName]);
  return (
    <>
      {category && (
        <ListStyle>
          <SearchBar changeText={changeText} />
          <RecipeList recipeList={category} isLarge={false} />
        </ListStyle>
      )}
    </>
  );
};
