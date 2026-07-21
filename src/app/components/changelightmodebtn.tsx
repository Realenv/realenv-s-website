"use client";

import { Button } from "@/components/ui/button";
import { SunMoon } from "lucide-react";

const changeLightMode = () => {
    console.log("bonjour");
};
const ChangeLightModeBtn = () => (
    <Button variant="outline" size={"icon-3xl"} className="fixed bottom-5 right-5 z-100 sm:relative sm:left-0 sm:bottom-0 sm:block rounded-full" onClick={changeLightMode}><SunMoon className="w-15 h-15"/></Button>
)
export default ChangeLightModeBtn;