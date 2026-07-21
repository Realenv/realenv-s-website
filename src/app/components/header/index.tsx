import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import styles from "./index.module.css";
import { NavigationHeader } from "../navigationheader";
import ChangeLightModeBtn from "../changelightmodebtn";

const changeLightMode = ()=>{};
const Header = () => {
    return (
        <header className={`height-of-header ${styles.headerComponent}`}>
            <div>
                <h1 className="text-lg bg-black font-extrabold mr-2 text-white px-2 py-1">REAL <span className="font-extralight">ENV</span></h1>
                <NavigationHeader/>
            </div>
            <div>
                <ChangeLightModeBtn/>
                <Button variant="outline" className="sm:hidden"><MenuIcon/></Button>
            </div>
        </header>
    );
}
export default Header;