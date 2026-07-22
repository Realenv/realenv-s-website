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
import { XLineTop } from "lucide-react"

const components: {title: string, sub: { title: string; href: string }[]}[] = [
    {
        title:"About me",
        sub: [
            {
                title: "Biography",
                href: "/docs/primitives/alert-dialog",
            },
            {
                title: "Social media",
                href: "/docs/primitives/hover-card",
            },
            {
                title: "Phone & email",
                href: "/docs/primitives/progress",
            },
        ]
    },
    {
        title: "skills",
        sub: [
            {
                title: "Computer sciences",
                href: "/computer-sciences",
            },
            {
                title: "Human languages",
                href: "/human-languages",
            },
            {
                title: "Martial arts",
                href: "/martial-arts",
            }
        ]
    },
    {
        title: "projects",
        sub: [
            {
                title: "Next.js projects",
                href: "/docs/primitives/alert-dialog",
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
  <nav className="box-border max-w-[calc(100vw-25px)] w-[360px] p-5 overflow-y-auto h-screen top-0 bg-background/85">
    <Button onClick={()=>{props.setOpenMobileNav(false)}}><XLineTop/></Button>
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