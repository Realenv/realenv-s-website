import { Separator } from "@/components/ui/separator";

export default function NotFound(){
    return (
        <div className="grow gap-3 flex justify-center items-center text-4xl min-h-[50vh]"><div className="font-extrabold text-end">404<br/><span className="font-light">Sorry</span></div><div className="flex justify-center items-center"><Separator className="bg-foreground h-19" orientation="vertical"/></div><div className="uppercase font-thin">Not<br/> Found</div></div>
    );
}