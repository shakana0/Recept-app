import styled from "styled-components";
import { RecipeItem } from "../Recipes/RecipeItem";

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
    /* height: 20px; */
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    /* background-color: transparent;
  height: 0px; */
  }
`;

export const CategoryList = ({recipe}: any) => {
  return (
    <>
      <ListStyle>
        <h1>category list</h1>
        <RecipeItem recipe={recipe}/>
      </ListStyle>
    </>
  );
};
