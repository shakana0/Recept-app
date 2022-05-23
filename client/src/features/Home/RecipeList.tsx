import { RecipeItem } from "./RecipeItem";
import { Recipe } from "../../interface/recipes";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import {SearchBar} from '../Search/SearchBar'

// interface RecipeItemProps{
// isLarge?: true | false
// }

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  overflow: scroll;
  width: 600px;

  a{
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

export const RecipeList = ({ recipeList }: any) => {
  const recipes = recipeList;
  // // const {id} = useParams()
  // const eventHandler = (childData) ={}
  // const 

  return (
    <>
    {/* <SearchBar childData={eventHandler}/> */}
      <ListStyle>
        {recipes.map((recipe: any, index: number) => (
          <Link to={`/recipe/${recipe._id}`} key={index} >
            <RecipeItem key={index} resipe={recipe}></RecipeItem>
          </Link>
        ))}
      </ListStyle>
    </>
  );
};
