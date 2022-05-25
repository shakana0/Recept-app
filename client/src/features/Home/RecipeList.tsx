import { RecipeItem } from "./RecipeItem";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default interface RecipeItemProps {
  isLarge?: true | false;
  recipeList?: any
}

const ListStyle = styled.div<RecipeItemProps>`
  display: flex;
  flex-direction: column;
   height: ${(props) => (props.isLarge === true ? "600px" : "300px")}; 
   /* height: 600px;  */
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

export const RecipeList = ({ recipeList, isLarge }:RecipeItemProps ) => {
  return (
    <>
      <ListStyle isLarge={isLarge}>
        {recipeList.map((recipe: any, index: number) => (
          <Link to={`/recipe/${recipe._id}`} key={index}>
            <RecipeItem key={index} recipe={recipe}></RecipeItem>
          </Link>
        ))}
      </ListStyle>
    </>
  );
};
