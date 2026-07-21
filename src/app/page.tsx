import React from "react";
import HomeCarousel from "./components/carousel"
import AboutMe from "./components/aboutme";

const Home = () => {
  return (
    <>
      <div className="hero-style">
        <HomeCarousel/>
      </div>
      <AboutMe/>
    </>
  )
}
export default Home;