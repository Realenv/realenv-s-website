import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const AboutMe = () => {
  return (
    <div className="flex hero-style gap-x-10">
        <Image src="/realenv.png" alt="RealEnv" width={256} height={256} className="rounded-full"/>
        <div className="flex flex-col gap-y-3.5">
          <p className="auto-sizing-base">Hi, Just tell me realenv, I would like to be more and more professional over the years, I am learning a lot of things, like coding in react, using next.js, i love rust, and I want to go to the MSU university of Moscou.</p>
          <div className="flex justify-end">
            <Button size="autoSizing" variant={"outline"}>My Bio</Button>
            <Button size="autoSizing">Contact me</Button>
          </div>
        </div>
    </div>
  )
}
export default AboutMe;