import React from "react";
import { Button } from "@/components/ui/button";
import OpenBadge from "../openbadge";
import Link from "next/link";

const MartialArts = (props: {includeBtns?: boolean}) => {
  return (
    <div className="p-5 flex flex-col gap-y-2 justify-center">
        <h2 className="relative z-15 hero-xl-style auto-sizing-h2 font-extrabold uppercase sm-15">martial arts skills</h2>
        <div className="bg-red-500 hero-style py-5 xl:p-13 flex justify-center">
          <div className="flex justify-center items-center max-w-7xl gap-3 xl:gap-7">
            <h2 className="capitalize font-bold text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl text-background">wing<br/> chun</h2>
            <div className="flex flex-col">
              <h3 className="uppercase font-light text-background text-2xl sm:text-3xl md:text-4xl 2xl:text-6xl">I love Wing chun</h3>
              <p className="font-light text-foreground text-xl sm:text-2xl md:text-3xl 2xl:text-5xl">Wing chun is nothing more than a perfect martial art, focused on speed, ideologie, weak points, and efficiency <Link className="link-style" href="https://www.youtube.com/@wingchunenligne5595">see more</Link></p>
            </div>
          </div>
        </div>
        { (props.includeBtns == undefined) && (<div className="relative z-15 hero-xl-style gap-x-2 gap-y-1 flex justify-end flex-wrap">
            <Button variant={"outline"} size={"autoSizing"} nativeButton={false} render={<Link href="/skills"></Link>}>My Skills</Button>
            <Button size={"autoSizing"} nativeButton={false} render={<Link href="/skills/martial-arts"></Link>}>My Martial Arts Skills</Button>
        </div>)
        }
    </div>
  )
}
export default MartialArts;