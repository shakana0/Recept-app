import React from "react";
import "./App.css";
import { Header } from "./components/header";
// import { Home } from "./views/Home";
import { CategoryPage } from "./views/CategoryPage";
import { Home } from "./features/Recipes/HomeView";
import { NavBar } from "./features/RecipeNav/Nav";
import { CategoryView } from "./features/RecipeNav/CategoryView";
import { RecipeView } from "./features/Recipe/RecipeView";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    
      <div id="App">
        <Header />
        <NavBar />
        {/* <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/recipe/:id">
            <RecipeView />
          </Route>
        </Switch> */}
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
