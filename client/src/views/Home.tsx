import styled from "styled-components";
import { MainButton } from "../components/mainBtn";
import { NavBar } from "../components/nav";
import { SearchBar } from "../components/searchBar";

const HomeLayout = styled.main`
  display: flex;
  .search-bar {
    margin: 0 auto;
  }
  .nav {
    display: flex;
    align-items: center;
  }
  .main-btn{
      margin: 7rem 5rem;
  }
`;

export const Home = () => {
  return (
    <HomeLayout>
      <div className="nav">
        <NavBar />
      </div>
      <div className="search-bar">
        <SearchBar />
        <div className="main-btn">
        <MainButton />
      </div> 
      </div>
    </HomeLayout>
  );
};
