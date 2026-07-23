import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function PhoneAndEmail(){
    const iconSize = "31";
    return (
    <div className="flex flex-col items-center gap-17 mt-25">
        <div id="biogrgaphy" className="max-w-[1250px] max-sm:flex-wrap px-10 gap-5 flex justify-center">
            <div className="flex justify-center items-center">
                <Image src="/realenv.svg" alt="RealEnv" width={256} height={256} className="rounded-full object-contain min-w-[256px] icon-to-invert"/>
            </div>
            <div className="flex flex-col gap-y-3.5">
                <p className="auto-sizing-hero-p">Hi, Just call me realenv, I would like to be more and more professional over the years, I am learning a lot of things, like coding in react, using next.js, i love rust, I am learning Russian indeed I want to go to the MSU university of Moscow.</p>
                <div className="flex justify-end gap-x-2 gap-y-1 flex-wrap">
                    <Button size="autoSizing" variant={"outline"} nativeButton={false} render={<Link href="#phone-and-email"></Link>}>phone & email</Button>
                    <Button size="autoSizing" nativeButton={false} render={<Link href="#social-media"></Link>}>See me on Social Media</Button>
                </div>
            </div>
        </div>
        <div className="flex flex-col" id="social-media">
            <div className="max-w-[1250px] max-sm:flex-wrap px-10 gap-5 flex justify-center">
                <div className="flex justify-center items-center">
                    <Image src="/icons/github.svg" alt="RealEnv" width={256} height={256} className="rounded-full object-contain min-w-[256px] icon-to-invert"/>
                </div>
                <div className="flex flex-col gap-y-3.5">
                    <p className="auto-sizing-hero-p">I share my projects on this plateform, like this from scratch-builded website. I can also doing some contributions to the github's dev community</p>
                    <div className="flex justify-end gap-x-2 gap-y-1 flex-wrap">
                    <Button size="autoSizing" variant={"outline"} nativeButton={false} render={<Link href="#phone-and-email"></Link>}>phone & email</Button>
                    <Button size="autoSizing" nativeButton={false} render={<Link href="https://github.com/Realenv/"></Link>}>See me on Github</Button>
                    </div>
                </div>
            </div>
            <div className="max-w-[1250px] max-sm:flex-wrap px-10 gap-5 flex justify-center">
                <div className="flex justify-center items-center">
                    <Image src="/icons/dev.svg" alt="RealEnv" width={256} height={256} className="rounded-full object-contain min-w-[256px] icon-to-invert"/>
                </div>
                <div className="flex flex-col gap-y-3.5">
                <p className="auto-sizing-hero-p">Just sharing my posts, news about my projects & repos, or simply asking about something.</p>
                <div className="flex justify-end gap-x-2 gap-y-1 flex-wrap">
                    <Button size="autoSizing" variant={"outline"} nativeButton={false} render={<Link href="#phone-and-email"></Link>}>phone & email</Button>
                    <Button size="autoSizing" nativeButton={false} render={<Link href="https://dev.to/realenv"></Link>}>See me on Dev.to</Button>
                </div>
                </div>
            </div>
        </div>
    </div>
    );
}