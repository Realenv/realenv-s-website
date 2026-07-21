import React from "react";
import HomeCarousel from "./components/homecarousel"
import AboutMe from "./components/aboutme";
import ComputerScience from "./components/computerscience";

const Home = () => {
  return (
    <>
      <div className="hero-style">
        <HomeCarousel/>
      </div>
      <AboutMe/>
      <ComputerScience/>
    </>
  )
}
export default Home;