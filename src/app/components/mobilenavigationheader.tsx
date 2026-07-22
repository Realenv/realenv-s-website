

export function MobileNavigationHeader() {
  return (
    <Accordion defaultValue={["shipping"]} className="max-w-lg">
      <AccordionItem value="shipping">
        <AccordionTrigger>What are your shipping options?</AccordionTrigger>
        <AccordionContent>
          We offer standard (5-7 days), express (2-3 days), and overnight
          shipping. Free shipping on international orders.
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="returns">
        <AccordionTrigger>What is your return policy?</AccordionTrigger>
        <AccordionContent>
          Returns accepted within 30 days. Items must be unused and in original
          packaging. Refunds processed within 5-7 business days.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="support">
        <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
        <AccordionContent>
          Reach us via email, live chat, or phone. We respond within 24 hours
          during business days.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}





"use client"

import * as React from "react"
import Link from "next/link"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

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

export function NavigationHeader() {
  return (
  <nav className="w-full fixed h-full bg-black">
    <Accordion>

        {
            components.map((component, index) => (
                <AccordionItem key={index} className="flex">
                    <AccordionTrigger>{component.title}</AccordionTrigger>
                    <AccordionContent>
                        <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {component.sub.map((subComponent, subIndex) => (
                            <Link
                            href={subComponent.href}
                            >
                              {subComponent.title}
                            </Link>
                        ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            ))
        }
    </Accordion>
  </nav>
  )
}