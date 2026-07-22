"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const changeLightMode = () => {
    document.body.classList.toggle("dark");
};
const ChangeLightModeBtn = () => (
    <>
        <div className="block 2md:hidden">
            <Button size={"icon-2xl"} className="fixed bottom-5 right-5 z-100 2md:relative 2md:left-0 2md:bottom-0 2md:block rounded-full" onClick={changeLightMode}><div className="icon-to-invert"><Image src="/sun-moon.svg"  width={39} height={39} className="invert pl-[3px] pb-[3px]" alt="change theme"/></div></Button>
        </div>
        <div className="hidden 2md:block">
            <button className="rounded-full" onClick={changeLightMode}><div className="icon-to-invert"><Image src="/sun-moon.svg" width={45} height={45} alt="change theme"/></div></button>
        </div>
    </>
)
export default ChangeLightModeBtn;