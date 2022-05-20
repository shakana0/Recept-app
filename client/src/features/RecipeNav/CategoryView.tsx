import { useState, useEffect } from "react";
import * as api from "../../api/index";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { CategoryList } from "./CategoryList";


const ListStyle = styled.div`
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const CategoryView = ({ recipeList }: any) => {
    const recipes = recipeList;
    const [category, setCategory] = useState<any>({})

    const {categoryName}: any = useParams()
    useEffect(() => {
      const loadRecipes = async () => {
        const res = await api.getSingleCategory(categoryName);
        setCategory(res.data);
        console.log(res.data)
      };
      loadRecipes();
    }, []);
    return (
      <>
        <ListStyle>
          {/* {recipes.map((recipe: any, index: number) => (
            <Link to={`/recipe/${recipe._id}`} key={index} >
              <RecipeItem key={index} resipe={recipe}></RecipeItem>
            </Link>
          ))} */}

          <CategoryList recipe={category}/>
        </ListStyle>
      </>
    );
  };
  