"use client";

import { Button } from "@/components/ui/button";
import { SunMoon } from "lucide-react";
import Image from "next/image";

const changeLightMode = () => {
    document.body.classList.toggle("dark");
};
const ChangeLightModeBtn = () => (
    <>
        <div className="block sm:hidden">
            <Button variant="outline" size={"icon-2xl"} className="fixed bottom-5 right-5 z-100 sm:relative sm:left-0 sm:bottom-0 sm:block rounded-full" onClick={changeLightMode}><Image src="/sun-moon.svg"  width={39} height={39} className="icon-to-invert pl-[3px] pb-[3px]" alt="change theme"/></Button>
        </div>
        <div className="hidden sm:block">
            <button className="rounded-full" onClick={changeLightMode}><div className="icon-to-invert"><Image src="/sun-moon.svg"  width={45} height={45} alt="change theme"/></div></button>
        </div>
    </>
)
export default ChangeLightModeBtn;