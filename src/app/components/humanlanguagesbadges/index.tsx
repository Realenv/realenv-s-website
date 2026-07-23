import React from "react";
import { Button } from "@/components/ui/button";
import OpenBadge from "../openbadge";
import Link from "next/link";

const HumanLanguagesBadges = () => {
  return (
    <div className="flex flex-col gap-y-5 justify-center">
        <h2 className="relative z-15 hero-xl-style auto-sizing-h2 font-extrabold uppercase mt-15">Human languages skills</h2>
        <div className="flex justify-center items-center">
          <div className="grid 2xs:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-7 p-2 sm:p-7 md:grid-cols-5 max-xs:p-1 max-xs:gap-4">
            <OpenBadge color="hsl(220 100% 55%)" title="french language" description="It is my native language" smallDescription="C1"/>
            <OpenBadge color="hsl(150 100% 45%)" title="arabic language" description="It is my country's language" smallDescription="B2"/>
            <OpenBadge color="hsl(200 100% 55%)" title="english language" description="It is my favorite language on the web" smallDescription="B1"/>
            <OpenBadge color="hsl(215 100% 25%)" title="russian language" description="It is my most loved language" smallDescription="pre A1"/>
            <OpenBadge color="hsl(1 100% 55%)" title="chinese language" description="It is my most needed language" smallDescription="pre A1"/>
          </div>
        </div>
        <div className="relative z-15 hero-xl-style gap-x-2 gap-y-1 flex justify-end flex-wrap">
            <Button variant={"outline"} size={"autoSizing"} nativeButton={false} render={<Link href="/skills"></Link>}>My Skills</Button>
            <Button size={"autoSizing"} nativeButton={false} render={<Link href="/skills/human-languages"></Link>}>My Human Languages Skills</Button>
        </div>
    </div>
  )
}
export default HumanLanguagesBadges;