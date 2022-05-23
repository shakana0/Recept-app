import { Recipe } from "../../interface/recipes";
import styled from "styled-components";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";


export default interface RecipeItemProps{
isLarge?: true | false
recipe?: any
}

const CardStyle = styled.article <RecipeItemProps>`
  background-color: #000000cf;
  width: ${ props => props.isLarge === true ? "550px" : "650px" };
  height: ${ props => props.isLarge === true ? "220px" : "420px" };
  /* width: 550px;
  height: 220px; */
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

    img{
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
  }
  .devider {
    border-left: 1px solid white;
    height: 15px;
  }
  .star-icons > * {
    font-size: 1rem;
  }
`;

export const RecipeItem = ({ resipe}: any, {isLarge}: RecipeItemProps ) => {
  return (
    <CardStyle isLarge={true}>
      <section className="content">
        <img
          src={resipe.imageUrl}
          alt="picture of coffee"
          width={150}
          height={100}
        />
        <div className="text">
          <h2>{resipe.title}</h2>
          <p>{resipe.description}</p>
        </div>
      </section>
      <section className="info">
        <p>Antal ingredienser</p>
        <div className="devider"></div>
        <p>Antal minuter</p>
        <div className="star-icons">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
          <StarOutlineIcon />
        </div>
      </section>
    </CardStyle>
  );
};
