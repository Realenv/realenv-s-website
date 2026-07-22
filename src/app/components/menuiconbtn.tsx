"use client";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import dynamic from "next/dynamic";
import React from "react";
export default function MenuIconBtn () {
    return (
        <Button><MenuIcon/></Button>
    );
}