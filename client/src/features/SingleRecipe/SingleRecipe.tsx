import styled from "styled-components";
import RecipeItemProps from "../Home/RecipeItem";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import * as api from "../../api/index";
import { useParams } from "react-router";
import { Comments } from "./Comments";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const RecipeStyle = styled.article<RecipeItemProps>`
  background-color: #000000d3;
  color: white;

  margin: 2rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  width: ${(props) => (props.isLarge === true ? "550px" : "650px")};
  height: ${(props) => (props.isLarge === true ? "220px" : "620px")};

  .content {
    display: flex;
    justify-content: center;

    .recipe-info {
      display: flex;
      flex-direction: column;
      padding-left: 2rem;

      .time-info {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
          font-size: 0.8rem;
        }
        .devider {
          border-left: 1px solid white;
          height: 20px;
        }

        h2 {
          margin-top: 0;
        }
      }
    }
  }
  .instructions {
    display: flex;
    justify-content: space-between;
    > * {
      width: 50%;
      li {
        margin: 0.6rem 0;
      }
    }
  }
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

  .rating,
  .rating-info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .devider {
      border-top: 1px solid white;
      width: 90%;
    }

    .rating-info {
      padding: 1rem 0;

      h1 {
        font-size: 1.6rem;
        margin: 0;
      }
    }

    .emoji-icon {
      font-size: 3rem;
      margin: 0 1rem;
    }
    .show {
      display: block;
      display: flex;
      align-items: center;
      height: 180px;
    }
    .hide {
      display: none;
    }
  }
`;

export const SingelRecipe = ({ isLarge, recipe }: RecipeItemProps) => {
  const [rating, setRating] = useState(0); // initial rating value
  const [showRating, setShowRating] = useState(false);

  const { id }: any = useParams();

  const handleRating = (rate: number) => {
    const newRating = rate / 20;
    setRating(rate / 20);
    api.postRating(id, { ratings: newRating });
    setShowRating(!showRating);
  };
  return (
    <>
      <RecipeStyle isLarge={false}>
        <section className="content">
          <img
            src={recipe.imageUrl}
            alt="picture of coffee"
            width={350}
            height={200}
          />
          <section className="recipe-info">
            <div>
              <h2>{recipe.title}</h2>
              <p>{recipe.description}</p>
            </div>
            <div className="time-info">
              <p>Antal ingredienser</p>
              <span>{recipe.ingredients && recipe.ingredients.length}</span>
              <div className="devider"></div>
              <p>Antal minuter</p>
              <span>{recipe.timeInMins}</span>
            </div>
          </section>
        </section>
          <section className="instructions">
            <ul>
              <h3>Ingredienser</h3>
              {recipe.ingredients &&
                recipe.ingredients.map((ingredient: any, index: number) => (
                  <li key={index}>
                    {ingredient.ingredient}, {ingredient.amount}
                    {ingredient.unit}
                  </li>
                ))}
            </ul>
            <ol>
              <h3>Tillagning</h3>
              {recipe.instructions &&
                recipe.instructions.map((step: string, index: number) => (
                  <li key={index}>{step}</li>
                ))}
            </ol>
          </section>
          <section className="rating">
            <div className="devider"></div>
            <div className={showRating ? "hide" : "show"}>
              <div className="rating-info">
              <h1>Vad tyckte du om receptet?</h1>
              <p>Klicka på en stjärna för att ge betyg</p>
              <Rating onClick={handleRating} ratingValue={rating} />
              <p>{recipe.ratings && recipe.ratings.length} omdömen</p>
            </div>
            </div>
            <div className={showRating ? "show" : "hide"}>
              <h2>Tack för ditt betyg</h2>
              <EmojiEmotionsIcon className="emoji-icon" />
            </div>
            <div className="devider"></div>
          </section>
      </RecipeStyle>
      <Comments commentsProp={recipe.comments} />
    </>
  );
};
