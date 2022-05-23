import { useState, useEffect } from "react";
import * as api from "../../api/index";
import styled from "styled-components";
import { SingelRecipe } from "./SingleRecipe";
import { useParams } from "react-router";
import { Recipe } from "../../interface/recipes";

const RecipeViewStyle = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* overflow: scroll; */
`;

export const RecipeView = () => {
  const [recipe, setRecipe] = useState<any>({});
  const { id }: any = useParams();

  useEffect(() => {
    const loadRecipe = async () => {
      const res = await api.getSingleRecipe(id);
      setRecipe(res.data);
    };
    loadRecipe();
  }, []);

  return (
    <>
      {recipe && (
        <RecipeViewStyle>
          <SingelRecipe recipe={recipe} />
        </RecipeViewStyle>
      )}
    </>
  );
};
