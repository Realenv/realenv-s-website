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
                return (<div className="max-w-[100px] " key={index}><Image className="icon-to-invert min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px]" src={`/icons/${icon}.svg`} height={100} width={100} alt={icon} key={index}/></div>)
            });
  return (
      <div className="to-animate-carousel flex overflow-clip justify-start items-start">
          {icons}
      </div>
  )
}




export default SkillIcons;