import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";

export default interface RecipeItemProps {
  isLarge?: true | false;
  recipe?: any;
}

const CardStyle = styled.article<RecipeItemProps>`
  background-color: #000000cf;
  width: ${(props) => (props.isLarge === true ? "550px" : "650px")};
  height: ${(props) => (props.isLarge === true ? "220px" : "420px")};

  color: white;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  transition: 0.25s ease;
  border-radius: 20px;

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }

  p {
    font-size: 0.9rem;
  }
  h2 {
    margin: 0.5rem 0;
  }
  section {
    display: flex;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;

    img {
      border-radius: 50px;
    }
  }
  .text {
    padding-left: 1rem;
  }
  .info {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    div {
      display: flex;
      align-items: center;

      span {
        margin-left: 0.6rem;
      }
    }
  }
  .devider {
    border-left: 1px solid white;
    height: 15px;
  }
  .star-icons > * {
    font-size: 1rem;
  }
`;

export const RecipeItem = ({ recipe, isLarge }: RecipeItemProps) => {
  const average = recipe.ratings
    .reduce((accumulator: number, currentValue: number) => {
      return accumulator + currentValue / recipe.ratings.length;
    }, 0)
    .toFixed(1);

  return (
    <CardStyle isLarge={true}>
      <section className="content">
        <img
          src={recipe.imageUrl}
          alt="picture of coffee"
          width={150}
          height={100}
        />
        <div className="text">
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
        </div>
      </section>
      <section className="info">
        <div>
          <p>Antal ingredienser</p>
          <span>{recipe.ingrediensts && recipe.ingrediensts.length}</span>
        </div>

        <div className="devider"></div>
        <div>
          <p>Antal minuter</p>
          <span>{recipe.timeInMins}</span>
        </div>
        <div className="star-icons">
          <span>{average}</span>
          <StarIcon />
        </div>
      </section>
    </CardStyle>
  );
};
