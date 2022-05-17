import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header";
// import { Home } from "./views/Home";
import { CategoryPage } from "./views/CategoryPage";
import { Home } from "./features/Recipes/HomeView";
import { SearchBar } from "./features/Search/SearchBar";
import { NavBar } from "./features/RecipeNav/Nav";

function App() {
  return (
    <BrowserRouter>
      <div id="App">
        <Header />
        <SearchBar/>
        <NavBar />
        <Home />
        {/* <CategoryPage/> */}
        <footer></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
