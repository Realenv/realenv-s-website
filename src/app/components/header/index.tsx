import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, SunMoon } from "lucide-react";
import Image from "next/image"
import styles from "./index.module.css";
import { NavigationHeader } from "../navigationheader";
import ChangeLightModeBtn from "../changelightmodebtn";

const changeLightMode = ()=>{};
const Header = () => {
    return (
        <header className={styles.headerComponent}>
            <div>
                <h1 className="text-lg bg-black font-extrabold mr-2 text-white px-2 py-1">REAL <span className="font-extralight">ENV</span></h1>
                <NavigationHeader/>
            </div>
            <div>
                <ChangeLightModeBtn/>
                <Button variant="outline" className="sm:hidden"><Menu/></Button>
            </div>
        </header>
    );
}
export default Header;