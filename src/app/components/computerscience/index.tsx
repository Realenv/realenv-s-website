import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SkillIcons from "../skillicons";
import Link from "next/link";

const ComputerScience = () => {
  return (
    <div className="flex flex-col gap-y-5 justify-center">
        <h2 className="hero-xl-style auto-sizing-h2 font-extrabold uppercase mt-15">Computer science skills</h2>
        <div className="w-full flex justify-center">
         <SkillIcons/>
        </div>
        <div className="hero-xl-style flex justify-end flex-wrap gap-x-2 gap-y-1">
            <Button variant={"outline"} size={"autoSizing"} nativeButton={false} render={<Link href="/skills"></Link>}>My Skills</Button>
            <Button size={"autoSizing"} nativeButton={false} render={<Link href="/skills/computer-sciences"></Link>}>My Computer science Skills</Button>
        </div>
    </div>
  )
}
export default ComputerScience;