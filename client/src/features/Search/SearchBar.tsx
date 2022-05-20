import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import * as api from "../../api/index"
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
  /* height: 50px; */
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

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState('')
  const [recipes, setRecipes] = useState<any>([])
  const inputHandler = (text: string) => {
    setInputValue(text)
  };
  console.log( inputValue);

  useEffect(() => {
    const loadRecipes = async () => {
      const res = await api.getBySearchTitle(inputValue);
      setRecipes(res.data);
      // jag är bäst
      console.log(res.data);
    };
    loadRecipes();
  }, []); 
  console.log(recipes)
   return (
    <>
      <SearchStyle className="search">
        <SearchIcon className="search-icon" />
        <InputStyle onChange={(event) => inputHandler(event.target.value)}/>
        {/* <button>Search</button> */}
      </SearchStyle>
    </>
  );
};
