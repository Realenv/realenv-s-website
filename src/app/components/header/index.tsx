import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, SunMoon } from "lucide-react";
import Image from "next/image"
import styles from "./index.module.css";

const Header = () => {
    return (
        <header className={styles.headerComponent}>
            <div>
                <div className="text-lg bg-black font-extrabold  text-white px-2 py-1">REAL <span className="font-extralight">ENV</span></div>
                <NavigationMenu className="hidden sm:block">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div>
                <Button variant="outline" size={"icon-3xl"} className="fixed bottom-5 right-5 z-100 sm:relative sm:left-0 sm:bottom-0 sm:block rounded-full"><SunMoon size={"xl"}/></Button>
                <Button variant="outline" className="sm:hidden"><Menu/></Button>
            </div>
        </header>
    );
}
export default Header;