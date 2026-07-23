import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div className="max-w-[1250px] max-sm:flex-wrap px-10 gap-5 flex justify-center">
        <div className="flex justify-center items-center">
         <Image src="/realenv.svg" alt="RealEnv" width={256} height={256} className="rounded-full object-contain min-w-[256px] "/>
        </div>
        <div className="flex flex-col gap-y-3.5">
          <p className="auto-sizing-hero-p">Hi, Just call me realenv, I would like to be more and more professional over the years, I am learning a lot of things, like coding in react, using next.js, i love rust, I am learning Russian indeed I want to go to the MSU university of Moscow.</p>
          <div className="flex justify-end gap-x-2 gap-y-1 flex-wrap">
            <Button size="autoSizing" variant={"outline"} nativeButton={false} render={<Link href="#phone-and-email"></Link>}>Phone & email</Button>
            <Button size="autoSizing" nativeButton={false} render={<Link href="/aboutme#biography"></Link>}>My Bio</Button>
          </div>
        </div>
    </div>
  )
}
export default AboutMe;