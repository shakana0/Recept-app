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
const SearchStyle = styled.div`
  width: 300px;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  &:hover {
    border-color: black;
  }
  .search-icon {
    width: 20%;
    color: white;
  }
`;

interface SearchProp{
  changeText?: any
}

export const SearchBar = ({changeText} : SearchProp) => {
  return (
    <>
      <SearchStyle className="search">
        <SearchIcon className="search-icon" />
        <InputStyle type="text" onChange={changeText} />
      </SearchStyle>
    </>
  );
};
