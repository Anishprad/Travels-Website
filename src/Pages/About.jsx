import React from "react";
import Header from "../Components/AboutComponents/Header";
import History from "../Components/AboutComponents/History";
import Tours from "../Components/AboutComponents/Tours";
import Introduction from "../Components/AboutComponents/Introduction";
import Mission from "../Components/AboutComponents/Mission";
import Core from "../Components/AboutComponents/Core";
import Team from "../Components/AboutComponents/Team";

const About = () => {
  return (
    <div className="py-2">
      <Header />
      <History />
      <Tours/>
      <Introduction/>
      <Mission/>
      <Core/>
      <Team/>
    </div>
  );
};

export default About;
