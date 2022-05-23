import { RecipeItem } from "./RecipeItem";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  overflow: scroll;
  width: 600px;

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    background-color: black;
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #b47d63;
    border-radius: 10px;
    width: 10px;
  }

`;

export const RecipeList = ({ recipeList }: any) => {
  const recipes = recipeList;
  return (
    <>
      <ListStyle>
        {recipes.map((recipe: any, index: number) => (
          <Link to={`/recipe/${recipe._id}`} key={index}>
            <RecipeItem key={index} resipe={recipe}></RecipeItem>
          </Link>
        ))}
      </ListStyle>
    </>
  );
};
