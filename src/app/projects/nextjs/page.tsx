import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function NextJSProjects (){
    return (
        <div id="biogrgaphy" className="mt-15 ax-w-[1250px] max-sm:flex-wrap px-10 gap-5 flex justify-center">
            <div className="flex justify-center items-center">
                <Image src="/icons/next.svg" alt="RealEnv" width={394} height={80} className="icon-to-invert object-contain min-w-[256px] "/>
            </div>
            <div className="flex flex-col gap-y-3.5">
            <p className="auto-sizing-hero-p">My first complete project in next.js was to build this personnal website from A to Z without AI or any personnalized help.</p>
            <div className="flex justify-end gap-x-2 gap-y-1 flex-wrap">
                <Button size="autoSizing" variant={"outline"} nativeButton={false} render={<Link href="/"></Link>}>Go to home</Button>
                <Button size="autoSizing" nativeButton={false} render={<Link href="https://nextjs.org/"></Link>}>About Next.js</Button>
            </div>
            </div>
        </div>
    );
}