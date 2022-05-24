import styled from "styled-components";
import { RecipeItem } from "../Home/RecipeItem";
import { Link } from "react-router-dom";

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
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

export const CategoryList = ({ recipeList }: any) => {

 

  const recipes = recipeList;
   return (
    <>
      {recipes && (
        <ListStyle>
          {
            recipes.map((recipe: any, index: number) => (
              <Link to={`/recipe/${recipe._id}`} key={index}  >
                <RecipeItem key={index} resipe={recipe}></RecipeItem>
              </Link>
            ))}
        </ListStyle>
      )}
    </>
  );
};
