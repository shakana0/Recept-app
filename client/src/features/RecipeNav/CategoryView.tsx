import { useState, useEffect } from "react";
import * as api from "../../api/index";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { CategoryList } from "./CategoryList";

const ListStyle = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CategoryView = () => {
  const [category, setCategory] = useState<any>([]);

  const { categoryName }: any = useParams();
  useEffect(() => {
    const loadRecipes = async () => {
      const res = await api.getSingleCategory(categoryName);
      setCategory(res.data);
      // console.log(res.data);
    };
    loadRecipes();
  }, [categoryName]);
  return (
    <>
      {category && (
        <ListStyle>
          <CategoryList recipeList={category} />
        </ListStyle>
      )}
    </>
  );
};
