"use client"

import * as React from "react"
import Link from "next/link"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const components: {title: string, sub: { title: string; href: string }[]}[] = [
    {
        title:"About me",
        sub: [
            {
                title: "Biography",
                href: "/aboutme/biography",
            },
            {
                title: "Social media",
                href: "/aboutme/social-media",
            },
            {
                title: "Phone & email",
                href: "/aboutme/phone-and-email",
            },
        ]
    },
    {
        title: "skills",
        sub: [
            {
                title: "Computer sciences",
                href: "/skills/computer-sciences",
            },
            {
                title: "Human languages",
                href: "/skills/human-languages",
            },
            {
                title: "Martial arts",
                href: "/skills/martial-arts",
            }
        ]
    },
    {
        title: "projects",
        sub: [
            {
                title: "Next.js projects",
                href: "/projects/nextjs",
            }
        ]
    },
    {
        title: "contributions",
        sub: [
        ]
    },
]

export default function NavigationHeader(props: {setOpenMobileNav: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
  <nav className="box-border flex flex-col gap-5 max-w-[calc(100vw-25px)] w-[360px] px-6 py-3 overflow-y-auto h-screen top-0 bg-background/85">
    <div className="flex justify-start">
        <Button onClick={()=>{props.setOpenMobileNav(false)}}><X/></Button>
    </div>
    <Accordion>

        {
            components.map((component, index) => (
                <AccordionItem key={index}>
                    <AccordionTrigger>{component.title}</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-1">
                        {component.sub.map((subComponent, subIndex) => (
                            <Link
                            key={subIndex}
                            href={subComponent.href}
                            className="pl-3"
                            >
                              {subComponent.title}
                            </Link>
                        ))}
                      </div>
                    </AccordionContent>
                </AccordionItem>
            ))
        }
    </Accordion>
  </nav>
  )
}