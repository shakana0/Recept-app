import { Category } from "@mui/icons-material";
import styled from "styled-components";
import { RecipeCard } from "../components/RecipeCard";
// import { NavBar } from "../components/nav";

const CategoryPageStyle = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const categoies = ["glass", "soppa", "mat", "mat", "mat"];

const categoryArray: any = [{}];


const saveArr = (name:string) => {
  let newA = []
  console.log('o nu här')
for(let category of categoryArray){
  console.log('jag är i loopen')
  if(category.name != name ||  categoryArray.length < 0){
    console.log('ifsatasen stämmer')
    newA.push({ name: name, amount: 1 });
    console.log(categoryArray)
  }else{
    console.log('ifsatasen stämmer inte')
    category.amount++
  }
}
return categoryArray
}
console.log(categoryArray)
for(let name of categoies){
  console.log('jag är här')
  saveArr(name)
}
// console.log(newArray);

// categoies.forEach((name) => {
//   console.log('hello')

//   newArr.forEach((category: any) => {
//     console.log('hello')
//     if(category.name != name){
//       newArr.push({ name: name, amount: 1 });
//     }else{
//       category.amount++
//     }
//     return newArr
// })
// })

// categoies.map((cateoryName) => {
//   if(!newArr.find((catgoryObj: any) => catgoryObj === cateoryName)){
//     return {namne: cateoryName, amount: 1}
//   }else{

//   }
// })

export const CategoryPage = () => {
  // if(!newArray.find((category) => category == category)){
  //     return{

  //     }
  // }else{
  //     Category.amount++
  // }

  return (
    <CategoryPageStyle>
      <RecipeCard />
    </CategoryPageStyle>
  );
};
