import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const InputStyle = styled.input`
  background-color: transparent;
  border: none;
  width: 80%;
  height: 2rem;
  color: white;
  &:focus {
    outline: none;
  }
`;
const Div = styled.div`
  width: 300px;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    border-color: black;
  }
  .search-icon {
    width: 20%;
    color: white;
  }
`;

export const SearchBar = () => {
  return (
    <>
      <Div>
        <SearchIcon className="search-icon" />
        <InputStyle />
      </Div>
    </>
  );
};
