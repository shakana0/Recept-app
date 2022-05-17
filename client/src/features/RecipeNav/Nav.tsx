import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Recipe } from "../../interface/recipes";
import { Category } from "@mui/icons-material";
import * as api from '../../api/index'

const NavStyle = styled.nav`
  background-color: #100703;
  /* height: 600px; */
  width: 200px;
  height: 100%;
  color: white;
  font-family: Roboto, Helvetica, sans-serif;

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

      const res = await api.getAllRecipes();
      console.log(res.data);
      setRecipes(res.data);
    };
    loadRecipes();
  }, []);

  let categories: any = []
//   categories = allRecipes.map((resipe) => resipe.category);

// for(const category of categories){
//     const test = !categories.find((objectCategory: any) => objectCategory.name == category)
//     if (test){
//         categories.push({name: category, amount: 1})
//     }for (const ovbject of categories) {
//         if(ovbject.name == category){
//             ovbject.amount++
//         }
//     }

// }
  const setCategory = () => {
  
       categories = allRecipes.map((resipe) => resipe.category);
       console.log(categories)
    //    for(const category of categories){
    //     const test = !categories.find((objectCategory: any) => objectCategory.name == category)
    //     if (test){
    //         categories.push({name: category, amount: 1})
    //     }for (const ovbject of categories) {
    //         if(ovbject.name == category){
    //             ovbject.amount++
    //         }
    //     }
    
    // }
  }
  setCategory()
console.log(categories)

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
