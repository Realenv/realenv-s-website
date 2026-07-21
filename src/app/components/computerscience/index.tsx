import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SkillIcons from "../skillicons";

const ComputerScience = () => {
  return (
    <div className="mt-15 flex flex-col gap-y-5 justify-center">
        <h2 className="hero-xl-style auto-sizing-h2 font-extrabold uppercase mt-15">Computer science skills</h2>
        <div className="max-w-[700px] flex justify-center">
         <SkillIcons/>
        </div>
        <div className="hero-xl-style flex justify-end">
            <Button variant={"outline"} size={"autoSizing"}>My Skills</Button>
            <Button size={"autoSizing"}>My Computer science Skills</Button>
        </div>
    </div>
  )
}
export default ComputerScience;