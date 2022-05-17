import { RecipeItem } from "./RecipeItem";
import { Recipe } from "../../interface/recipes";
import styled from "styled-components";

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  /* width: 100%; */
  overflow: scroll;
`;

export const RecipeList = ({ recipeList }: any) => {
  const recipes = recipeList;
  return (
    <>
      <ListStyle>
        {recipes.map((resipe: any, index: number) => (
          <RecipeItem key={index} resipe={resipe}></RecipeItem>
        ))}
      </ListStyle>
    </>
  );
};
