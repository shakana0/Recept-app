import styled from "styled-components";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Button } from "./headerBtn";

const HeaderStyle = styled.header`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  /* height: 80px; */


  svg {
    transition: .5s ease;
    font-size: 30px;
    color: white;
    &:hover {
      transform: scale(1.2);
    }
  }
  .coffee-icon {
      font-size: 40px;
    }
`;

const DivStyle = styled.header`
  width: 250px;
  border: 2 px solid white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Header = () => {
  return (
    <HeaderStyle>
      <CoffeeMakerIcon className="coffee-icon" />
      <DivStyle>
        <FavoriteBorderIcon />
        <PermIdentityIcon />
        <Button />
      </DivStyle>
    </HeaderStyle>
  );
};
