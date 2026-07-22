import { ReactNode } from "react";

const OpenBadge = (props: {title: string, description: string, smallDescription: string, color: string})=>{
    return (
        <div className="flex  relative flex-col justify-between w-[125px] h-[125px] 2xl:m-[60px] 2lg:m-[30px] lg:m-[15px] 2xl:scale-200 lg:scale-125 2lg:scale-150 leading-4 p-1 rounded-xs text-foreground bg-background" style={{boxShadow: `0px 0px 115px 3px ${props.color}`}}>
            <h3 className="relative z-10 text-md lowercase font-extrabold">{props.title}</h3>
            <p className="relative z-10 text-sm pl-1 leading-4 font-light">{props.description}</p>
            <div className="relative z-10 flex justify-between text-xl">
                <h4>{props.smallDescription}</h4>
                <button>see</button>
            </div>
            <div className="absolute top-0 left-0 w-full h-full opacity-65" style={{background:props.color}}></div>
        </div>
    );
}
export default OpenBadge;