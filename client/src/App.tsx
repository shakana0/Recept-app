import React from "react";
import "./App.css";
import { Header } from "./features/Header/Header";
import { Home } from "./features/Home/HomeView";
import { NavBar } from "./features/Category/Nav";
import { CategoryView } from "./features/Category/CategoryView";
import { RecipeView } from "./features/SingleRecipe/SingleRecipeView";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    
      <div id="App">
        <Header />
        <NavBar />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeView />} />
          <Route path="/category/:categoryName" element={<CategoryView />} />
        </Routes>

        <footer></footer>
      </div>
    
  );
}

export default App;
