"use client";
import React from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const SkillIcons = () => {
    const svgIcons = [
        "next",
        "react",
        "rust",
        "tailwind",
        "shadcn",
        "css",
        "html",
        "js",
        "git",
        "docker",
    ];
  const plugin = React.useRef(
    Autoplay({ delay: 0, stopOnInteraction: false })
  )
  return (
      <Carousel
        opts={{loop:true, duration:2000}}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        className="w-full h-full"
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {svgIcons.map((icon, index)=>{
                return (<CarouselItem className="max-w-[100px] " key={index}><Image src={`/icons/${icon}.svg`} height={100} width={100} alt={icon} key={index}/></CarouselItem>)
            })}
        </CarouselContent>
      </Carousel>
  )
}




export default SkillIcons;