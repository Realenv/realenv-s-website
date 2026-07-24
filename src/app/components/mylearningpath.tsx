"use client";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Image from "next/image";
import { Brain, LockKeyholeOpen } from 'lucide-react';

export default function MyLearningPath (){
    const learningPath = [
        {
            title: "Pure HTML/CSS/JS vanilla",
            subtitle: "I practised a lot on codepen",
            description: "I just was a beginner in coding, without using any superset like typescript or even the very popular tool: git, but over year I acquiered a super-talent in pure web technologies",
            background: "hsl(50, 90%, 35%)",
            icon: <Image src="/icons/html.svg" height={12} width={55} alt=""/>,
            date: "2023 - 2025"
        },
        {
            title: "Just discovering Cybersecurity",
            subtitle: "pentesting & most populars professions",
            description: "I followed many online courses just to know a bit about the fondamentals, but without real project, just discovering what is it",
            background: "hsl(220, 50%, 45%)",
            icon: <LockKeyholeOpen/>,
            date: "2024 - 2025"
        },
        {
            title: "Rust & c++",
            subtitle: "I dicovered my favorite programming languages focused on performance",
            description: "After that, I have created half code of game, created with rust from scratch, by modifying the pixels of the window directly without gpu.",
            background: "hsl(50, 0%, 45%)",
            icon: <Image src="/icons/rust.svg" height={60} width={60} alt=""/>,
            date: "2025 - 2026"
        },
        {
            title: "The ML World & IA",
            subtitle: "ML & Python",
            description: "I followed many online courses just to know a bit about the fondamentals, and I practised a bit ML, with Python.",
            background: "hsl(100, 50%, 35%)",
            icon: <Brain/>,
            date: "2026"
        },
        {
            title: "Fullstack dev",
            subtitle: "Next.JS, React, Shadcn and others",
            description: "Now, I really would like to be a pro! Believe me, I made this website entirely using MODERN WEB TECHNOLOGIES, like NEXT.JS, REACT, SHADCN, TAILWIND",
            background: "hsl(30, 90%, 35%)",
            icon: <Image src="/icons/next.svg" height={55} width={55} alt=""/>,
            date: "Now"
        },
    ];
    return (
        <div  className="bg-neutral-800 px-5 shadow-inner shadow-background">
        <VerticalTimeline>
            {
                learningPath.reverse().map(
                    (learningItem, learningIndex) => {
                        var iconStyle = { background: learningItem.background, color: '#fff'};
                        if(learningItem.icon.type == Image){
                            iconStyle = Object.assign({}, iconStyle, { display:"flex", justifyContent:"center", alignItems: "center"});
                        }
                        return (
                            <VerticalTimelineElement
                                contentStyle={{ background: learningItem.background, color: '#fff' }}
                                contentArrowStyle={{ borderRight: `7px solid  ${learningItem.background}` }}
                                iconStyle={iconStyle}
                                icon={learningItem.icon}
                                key={learningIndex}
                                date={learningItem.date}
                            >
                                <h3>{learningItem.title}</h3>
                                <h4>{learningItem.subtitle}</h4>
                                <p>{learningItem.description}</p>
                            </VerticalTimelineElement>
                        );
                    }
                )
            }
        </VerticalTimeline>
        </div>
    )
}