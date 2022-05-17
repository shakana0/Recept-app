import { RecipeItem } from "./RecipeItem";
import { Recipe } from "../../interface/recipes";
import styled from "styled-components";

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  overflow: scroll;

  ::-webkit-scrollbar{
  background-color: black;
  width: 10px;
}

::-webkit-scrollbar-thumb{
  background-color: #B47D63;
  border-radius: 10px;
  /* height: 20px; */
  width: 10px;
}
::-webkit-scrollbar-track{
  /* background-color: transparent;
  height: 0px; */
}`;

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
