import SkillIcons from "@/app/components/skillicons";
import Link from "next/link";

export default function Empty (){
    return (
        <div className="flex flex-col hero-style articleSection">
            <div>
                <h3>What kind of technologies I'm mastering now ?</h3>
                <SkillIcons/>
            </div>
            <div>
                <h3>On the Frontend</h3>
                <div>
                    <h4>1- React</h4>
                    <p><Link href="https://react.dev/">React</Link> is a modern framework that let's you build modern frontend app using out-of-the-box reusable components</p>
                </div>
                <div>
                    <h4>2- HTML/CSS/JS Vanilla</h4>
                    <p>There are the bases of every web technologie like react, it is the native language of the browser</p>
                </div>
                <div>
                    <h4>3- Tailwindcss</h4>
                    <p><Link href="https://tailwindcss.com/">Tailwindcss</Link> is a modern css framework that let's you coding your css using powerful classes in your html, and even in your css file, increasing product's quality and so the time cost.</p>
                </div>
                <div>
                    <h4>4- Shadcn</h4>
                    <p>Using <Link href="https://ui.shadcn.com/">Shadcn</Link> is simply just the trend today to build your app on top of tailwind</p>
                </div>
            </div>
            <div>
                <h3>On the Backend</h3>
                <div>
                    <h4>1- Next.js app router</h4>
                    <p>Integrating SSR Server Side Rendering and CSR Client Side Rendering in the same time? You are in the good place. Today, <Link href="https://nextjs.org/">Next.js</Link> become more than a requirement for fullstack dev.</p>
                </div>
            </div>
            <div>
                <h3>For collaboration</h3>
                <div>
                    <h4>1- Git</h4>
                    <p>In my opinion, <Link href="https://git-scm.com/">Git</Link> is just the most used tool by developpers, it is more than a requirement to use Git for increasing productivity, by this one, you will able to push your code into github, gitlab, and more.</p>
                </div>
            </div>
            <div>
                <h3>For containerization</h3>
                <div>
                    <h4>1- Docker</h4>
                    <p><Link href="https://www.docker.com/">Docker</Link> was launched in 2013, it is very important to create, run images and managing containers today, for every developpers, from devops to cybersecurity</p>
                </div>
            </div>
        </div>
    );
}