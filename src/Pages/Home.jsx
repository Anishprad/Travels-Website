import React from "react";
import Explore from "../Components/ExplorePage/Explore";
import Domestic from "../Components/Domestic/Domestic";
import International from "../Components/International/International";
import Airlines from "../Components/Airlines/Airlines";
import Tour from "../Components/Tour/Tour";
import Testinomials from "../Components/Testinomials/Testinomials";

const Home = () => {
  return (
    <div className="w-full">
      <Explore />
      <Domestic />
      <International />
      <Airlines />
      <Tour />
      <Testinomials />
    </div>
  );
};

export default Home;
