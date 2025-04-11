import { Divider } from "@mui/material";
import HeroBanner from "../components/HomeComponents/heroBanner";
import Cards from "../components/Cards/cards";
import HomeSection from "../components/HomeComponents/homeSection";

function Home() {
  return (
    <div className="pageContainer">
      <HeroBanner></HeroBanner>
      <Divider variant="middle" sx={{borderWidth:'2px'}}></Divider>
      <HomeSection></HomeSection>
    </div>
  );
}

export default Home;