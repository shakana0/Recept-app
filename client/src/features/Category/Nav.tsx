import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { ICategory } from "../../interface/category";
import { Category } from "@mui/icons-material";
import * as api from "../../api/index";
import { Link } from "react-router-dom";

const NavStyle = styled.nav`
  background-color: #100703;
  /* height: 600px; */
  width: 200px;
  height: 100%;
  color: white;
  font-family: Roboto, Helvetica, sans-serif;

  a{
    text-decoration: none;
    color: white;
  }
  h2 {
    text-align: center;
  }
  ul {
    padding: 1rem;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0.5rem;
    &:hover {
      font-weight: 600;
      cursor: pointer;
    }

    p {
      margin-left: 1rem;
    }
  }
`;

export const NavBar = () => {
  const [allCategories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    const loadRecipes = async () => {
      const res = await api.getAllCategories();
      setCategories(res.data);
    };
    loadRecipes();
  }, []);
  // console.log(allCategories)

  const categoryList = allCategories.map((category, index) => (
    <Link to={`/category/${category._id}`} key={index}>
      <li key={index}>
        {category._id}
        <p>({category.count})</p>
      </li>
    </Link>
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
