import styled from "styled-components";
import RecipeItemProps from "../Recipes/RecipeItem";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { Recipe } from "../../interface/recipes";

const RecipeStyle = styled.article<RecipeItemProps>`
  background-color: #654637;
  margin: 2rem auto;
  width: ${(props) => (props.isLarge === true ? "550px" : "650px")};
  height: ${(props) => (props.isLarge === true ? "220px" : "620px")};
  img {
    width: ${(props) => (props.isLarge === true ? "150px" : "350px")};
    height: ${(props) => (props.isLarge === true ? "100px" : "320px")};
  }
  overflow: scroll;
  ::-webkit-scrollbar {
    background-color: black;
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #b47d63;
    border-radius: 10px;
    width: 10px;
  }
  div {
    height: 100%;
  }
  .devider {
    border-top: 1px solid white;
    width: 60%;
  }
  .icons > * {
    font-size: 2rem;
    margin: 0 0.4rem;
    &:hover {
      color: #ffca0a;
    }
  }
`;

export const SingelRecipe = ({ isLarge, recipe }: RecipeItemProps) => {
  return (
    <>
      <RecipeStyle isLarge={false}>
        <div>
          <section className="content">
            <img
              src={recipe.imageUrl}
              alt="picture of coffee"
              width={350}
              height={200}
            />
            <div className="text">
              <h2>{recipe.title}</h2>
              <p>{recipe.description}</p>
            </div>
          </section>
          <section className="info">
            <p>Antal ingredienser</p>
            <div className="devider"></div>
            <p>Antal minuter</p>
            <section className="instructions">
              <ul>
                {recipe.ingrediensts && recipe.ingrediensts.map((ingredient: any, index: number) => (
                  <li key={index}>
                    {ingredient.ingredient}, {ingredient.amount}
                    {ingredient.unit}
                  </li>
                ))}
              </ul>
              <ol>
                {recipe.instructions && recipe.instructions.map((step: string, index: number) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </section>
            <div className="rating">
              <h1>Vad tyckte du om receptet?</h1>
              <section className="rating-sec">
                <div className="devider"></div>
                <p>Klicka på en stjärna för att ge betyg</p>
                <div className="icons">
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                  <StarOutlineIcon />
                </div>
                <div className="devider"></div>
              </section>
            </div>
          </section>
        </div>
      </RecipeStyle>
    </>
  );
};
