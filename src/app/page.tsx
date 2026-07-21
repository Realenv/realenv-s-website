import React from "react";
import HomeCarousel from "./components/homecarousel"
import AboutMe from "./components/aboutme";
import ComputerScience from "./components/computerscience";

const Home = () => {
  return (
    <>
      <HomeCarousel/>
      <div className="height-of-header bg-background/95 z-50 sticky top-0"></div>
      <AboutMe/>
      <ComputerScience/>
    </>
  )
}
export default Home;