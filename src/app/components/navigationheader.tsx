"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const components: {title: string, sub: { title: string; href: string; description: string }[]}[] = [
    {
        title:"About me",
        sub: [
            {
                title: "Biography",
                href: "/docs/primitives/alert-dialog",
                description:
                "A modal dialog that interrupts the user with important content and expects a response.",
            },
            {
                title: "Social media",
                href: "/docs/primitives/hover-card",
                description:
                "For sighted users to preview content available behind a link.",
            },
            {
                title: "Phone & email",
                href: "/docs/primitives/progress",
                description:
                "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
            },
        ]
    },
    {
        title: "skills",
        sub: [
            {
                title: "Computer sciences",
                href: "/computer-sciences",
                description:
                "I have used a lot of frameworks and Programming languages over the time, click to see more about this section.",
            },
            {
                title: "Human languages",
                href: "/human-languages",
                description:
                "I have a C1 level in french, a B1 level in english, and a B2 level in arabic, I'm also learning chinese and Russian.",
            },
            {
                title: "Martial arts",
                href: "/martial-arts",
                description:
                "I'am currently practising a chinese martial art: the Wing Chun.",
            }
        ]
    },
    {
        title: "projects",
        sub: [
            {
                title: "Next.js projects",
                href: "/docs/primitives/alert-dialog",
                description:
                "For next.js practising, I'am just building this website from A to Z using modern web technologies, see more about what I'am using to create this website.",
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
    <NavigationMenu>
      <NavigationMenuList>

        {
            components.map((component, index) => (
                <NavigationMenuItem key={index} className="flex">
                    <NavigationMenuTrigger>{component.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {component.sub.map((subComponent, subIndex) => (
                            <ListItem
                            key={subIndex}
                            title={subComponent.title}
                            href={subComponent.href}
                            >
                            {subComponent.description}
                            </ListItem>
                        ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            ))
        }
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink render={<Link href={href}><div className="flex flex-col gap-1 text-sm">
          <div className="leading-none font-medium">{title}</div>
          <div className="line-clamp-2 text-muted-foreground">{children}</div>
        </div></Link>} />
    </li>
  )
}
