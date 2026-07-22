import React from "react";
import Image from "next/image";

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
    var icons = [...svgIcons,...svgIcons].map((icon, index)=>{
                return (<div className="max-w-[100px] 2xl:max-w-[200px]" key={index}><Image className="icon-to-invert min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px] 2xl:min-w-[200px] 2xl:min-h-[200px] 2xl:max-w-[200px] 2xl:max-h-[200px]" src={`/icons/${icon}.svg`} height={100} width={100} alt={icon} key={index}/></div>)
            });
  return (
    <div className="max-w-[1000px] 2xl:max-w-[2000px] overflow-hidden">
    <div className="to-animate-carousel flex justify-start items-start">
        {icons}
    </div>
    </div>
  )
}




export default SkillIcons;