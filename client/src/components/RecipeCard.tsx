import styled from "styled-components";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

const CardStyle = styled.article`
  background-color: black;
  width: 400px;
  height: 200px;
  color: white;
  display: flex;
  flex-direction: column;

  img {
    height: 150;
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

export const RecipeCard = () => {
  return (
    <CardStyle>
      <section>
        <img
          src="https://thumbs.gfycat.com/AcidicUnfoldedGoldenretriever-max-1mb.gif"
          alt="jumping animated hamburger"
          width={150}
        />
        <div className="text">
          <h2>Hello</h2>
          <p>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum
            dolor sit ame
          </p>
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
