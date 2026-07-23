import styles from "./index.module.css";
import { NavigationHeader } from "../navigationheader";
import ChangeLightModeBtn from "../changelightmodebtn";
import MenuIconBtn from "../menuiconbtn";
import Link from "next/link";

const Header = () => {
    return (
        <header className={`height-of-header ${styles.headerComponent}`}>
            <div>
                <Link href="/" className="bg-black font-extrabold mr-2 text-white text-xl px-4 py-2">REAL <span className="font-extralight">ENV</span></Link>
                <div className="hidden 2md:block "><NavigationHeader/></div>
            </div>
            <div>
                <ChangeLightModeBtn/>
                <div className="2md:hidden">
                    <MenuIconBtn/>
                </div>
            </div>
        </header>
    );
}
export default Header;