import Link from "next/link";
import { ReactNode } from "react";

const OpenBadge = (props: {title: string, description: string, smallDescription: string, color: string})=>{
    return (
        <Link href={`/skills/human-languages#${props.title}`} className="flex relative flex-col justify-between w-[125px] h-[125px] 2xl:m-[60px] 2lg:m-[30px] lg:m-[15px] 2xl:scale-200 lg:scale-125 2lg:scale-150 hover:2xl:scale-220 transition-all transition-duration-1 hover:lg:scale-145 hover:2lg:scale-170 leading-4 p-1 rounded-xs text-foreground bg-background" style={{boxShadow: `0px 0px 115px 3px ${props.color}`}}>
            <h3 className="relative z-10 text-md lowercase font-extrabold">{props.title} language</h3>
            <p className="relative z-10 text-sm pl-1 leading-4 font-light">{props.description}</p>
            <div className="relative z-10 flex justify-between text-xl">
                <h4>{props.smallDescription}</h4>
                <button>see</button>
            </div>
            <div className="absolute top-0 left-0 w-full h-full opacity-65" style={{background:props.color}}></div>
        </Link>
    );
}
export default OpenBadge;