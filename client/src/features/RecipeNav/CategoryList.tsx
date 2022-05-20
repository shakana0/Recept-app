import styled from "styled-components";
import { RecipeItem } from "../Recipes/RecipeItem";
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
    /* height: 20px; */
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    /* background-color: transparent;
  height: 0px; */
  }
`;

export const CategoryList = ({ recipeList }: any) => {
  const recipes = recipeList;
  // console.log(recipeList);
 
  return (
    <>
      {recipes && (
        <ListStyle>
          {
            recipes.map((recipe: any, index: number) => (
              <Link to={`/recipe/${recipe._id}`} key={index}>
                <RecipeItem key={index} resipe={recipe}></RecipeItem>
              </Link>
            ))}
        </ListStyle>
      )}
    </>
  );
};
