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

const Header = () => {
    return (
        <header>
            <Image src="/realenv.svg" alt="REAL ENV" width={48} height={48} />
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
            <Button variant="outline" className="hidden sm:block"><SunMoon/></Button>
            <Button variant="outline" className="sm:hidden"><Menu/></Button>
        </header>
    );
}
export default Header;