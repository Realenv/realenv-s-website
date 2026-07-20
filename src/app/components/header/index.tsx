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
                <Image src="/realenv.svg" alt="REAL ENV" width={38} height={38} />
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
                <Button variant="outline" className="hidden sm:block rounded-full"><SunMoon/></Button>
                <Button variant="outline" className="sm:hidden"><Menu/></Button>
            </div>
        </header>
    );
}
export default Header;