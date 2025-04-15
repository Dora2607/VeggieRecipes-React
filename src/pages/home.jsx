import { Divider } from "@mui/material";
import HeroBanner from "../components/HomeComponents/heroBanner";
import Cards from "../components/Cards/cards";
import HomeSection from "../components/HomeComponents/homeSection";
import RecipesType from "../components/HomeComponents/recipesType";

function Home() {
  return (
    <div className="pageContainer">
      <HeroBanner></HeroBanner>
      <RecipesType></RecipesType>
      <HomeSection></HomeSection>
    </div>
  );
}

export default Home;