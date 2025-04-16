
import HeroBanner from "../components/HomeComponents/heroBanner";
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