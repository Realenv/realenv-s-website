import React from "react";
import HomeCarousel from "./components/homecarousel"
import AboutMe from "./components/aboutme";
import ComputerScience from "./components/computerscience";
import HumanLanguagesBadges from "./components/humanlanguagesbadges";
import MartialArts from "./components/martial-arts";

const Home = () => {
  return (
    <>
      <HomeCarousel/>
      <div className="height-of-header bg-background/95 z-22 sticky top-0"></div>
      <div className="w-full flex justify-center">
        <AboutMe/>
      </div>
      <ComputerScience/>
      <HumanLanguagesBadges/>
      <MartialArts/>
      <div className="pb-6 w-full h-2"></div>
    </>
  )
}
export default Home;