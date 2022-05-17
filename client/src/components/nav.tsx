import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Recipe } from "../interface/recipes";
import { Category } from "@mui/icons-material";
import * as api from "../api/index";

const NavStyle = styled.nav`
  background-color: #100703;
  height: 600px;
  color: white;
  font-family: Roboto, Helvetica, sans-serif;

  /* width: 175px; */

  h2 {
    text-align: center;
  }
  ul {
    padding: 1rem;
  }
  li {
    margin: 0.5rem;
    &:hover {
      font-weight: 600;
    }
  }
`;

export const NavBar = () => {
  const [allRecipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    const loadRecipes = async () => {
      // const response = await fetch("http://localhost:3030/recipes").then(
      //   (data) => data.json()
      // );

      const res = await api.getAllRecipes();
      console.log(res.data);
      setRecipes(res.data);
    };
    loadRecipes();
  }, []);

  let counter = 1;
  let categories = []

  const setCategory = () => {
  
       categories = allRecipes.map((resipe) => resipe.category);
      //  if(categories.find((x) => console.log('här är jaag' + x))){
      //    console.log('jag finns:))')
      //  }
       console.log(categories)
  }
  setCategory()
  const categoryList = allRecipes.map((recipe, index) => (
    <li key={index}>{recipe.category}</li>
  ));

  return (
    <>
      <NavStyle>
        <h2>Kategorier</h2>
        <ul>{categoryList}</ul>
      </NavStyle>
    </>
  );
};
