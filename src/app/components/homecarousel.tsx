"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

const HomeCarousel = () => {
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi | null>(null);
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  React.useEffect(
    ()=>{
      if(!carouselApi) return;
        console.log("hahaha");
      const changeBackground = () => {
        setBackgroundColor(items[carouselApi.selectedScrollSnap()].bg);
      }
      carouselApi.on("select", changeBackground);
    },
    [carouselApi]
  )
  const items = [
    {
      title: "FUllStack Dev",
      description: "I learn Next.js with a couple of powerful react libraries and more, like tailwind, shadcn and others, and so by building this website from scratch using most recent web technologies.",
      bg: "hsl(50 35% 50%)",
      firstBtnText: "My learning Path",
      secondBtnText: "About next.js"
    },
    {
      title: "Chinese",
      description: "I am learning the initial vocabulary list of the first band of the HSK3.0, because it is the largest recognized vocabulary list in chinese.",
      bg: "hsl(1 50% 50%)",
      firstBtnText: "My learning Path",
      secondBtnText: "About next.js"
    },
    {
      title: "Russian",
      description: "I am learning TRKI 1, in my opinion, it is the best way to get certified in russian, I am currently learning by heart the official minimum vocabulary list to have a recognized B1 Level.",
      bg: "hsl(240 50% 50%)",
      firstBtnText: "My learning Path",
      secondBtnText: "About next.js"
    }
  ];
  const [backgroundColor, setBackgroundColor] = React.useState(items[0].bg);
  return (
    <>
      <div className="fixed  top-0 z-25"></div>
      <div className="hero-style" style={{background: backgroundColor}}>
        
        <Carousel
          opts={{loop:true}}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          className="w-full h-full"
          onMouseLeave={plugin.current.reset}
          setApi={setCarouselApi}
        >
          <CarouselContent >
            {items.map((item, index) => (
              <CarouselItem key={index} className="pt-[51px] sm:pt-[59px] md:pt-[65px] xl:pt-[75px] 2xl:pt-[85px] box-border flex flex-col justify-center h-[100vh] ">
                <h2 className="pl-5 uppercase auto-sizing-h2 font-extrabold">{item.title}</h2>
                <p className="auto-sizing-hero-p font-light m-2">{item.description}</p>
                <div className="flex flex-wrap gap-x-2 gap-y-1 justify-end gap-x-3">
                  <Button variant={"outline"}  size={"autoSizing"} >{item.firstBtnText}</Button>
                  <Button size={"autoSizing"} >{item.secondBtnText}</Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext disabled={false}/>
          <CarouselPrevious disabled={false}/>
        </Carousel>
      </div>
    </>
  )
}
export default HomeCarousel;