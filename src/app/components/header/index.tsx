import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import styles from "./index.module.css";
import { NavigationHeader } from "../navigationheader";
import ChangeLightModeBtn from "../changelightmodebtn";
import MenuIconBtn from "../menuiconbtn";

const Header = () => {
    return (
        <header className={`height-of-header ${styles.headerComponent}`}>
            <div>
                <h1 className="text-lg bg-black font-extrabold mr-2 text-white px-2 py-1">REAL <span className="font-extralight">ENV</span></h1>
                <div className="hidden sm:block"><NavigationHeader/></div>
            </div>
            <div>
                <ChangeLightModeBtn/>
                <div className="sm:hidden">
                    <MenuIconBtn/>
                </div>
            </div>
        </header>
    );
}
export default Header;