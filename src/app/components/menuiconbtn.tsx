"use client";

import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import dynamic from "next/dynamic";
const MobileNavigationHeader = dynamic(() => import("./mobilenavigationheader"),{ ssr: false});

import React, { useEffect, useRef, useState } from "react";

export default function MenuIconBtn () {
    const [openMobileNav, setOpenMobileNav] = useState(false);
    const toggleFunc = ()=>{
        setOpenMobileNav(!openMobileNav);
    }
    return (
        <>
            <div style={{right: openMobileNav? "0px" : "-100vw"}} className="fixed top-0 transition-all duration-550">
                <MobileNavigationHeader setOpenMobileNav={setOpenMobileNav}/>
            </div>
            <Button onClick={toggleFunc}><MenuIcon/></Button>
        </>
    );
}