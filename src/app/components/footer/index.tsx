import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";
import { PT_Sans } from "next/font/google";
const pt_sans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin"],
  weight: ['400','700']
});

const Footer = () => {
    const iconSize = "35";
    return (
        <footer className={`${styles.footerStyle} auto-sizing-base ${pt_sans.variable} mt-15`}>
            <div>
                <Image loading="lazy" src="/realenv.svg" width={256} height={256} alt="realenv" className="shadow-2xl rounded-xs shadow-white/10 dark:shadow-gray-600" />
            </div>
            <div>
                <h3>Common links</h3>
                <div>
                    <Link href="">Home</Link>
                    <Link href="/home">Biography</Link>
                    <Link href="/home">Skills</Link>
                    <Link href="/home">Projects & contributions</Link>
                </div>
            </div>
            <div>
                <h3>Contacts</h3>
                <div>
                    <Link href=""><Phone style={{height:`${iconSize}px`, width:`${iconSize}px`}}/>: --------</Link>
                    <Link href=""><Mail style={{height:`${iconSize}px`, width:`${iconSize}px`}}/>: --------</Link>
                    <Link href="https://github.com/Realenv"><div className="icon-to-invert"><Image src="/icons/github.svg" alt="github" width={iconSize} height={iconSize} className="invert"/></div>: @Realenv</Link>
                    <Link href="https://dev.to/realenv"><div className="icon-to-invert"><Image src="/icons/dev.svg" alt="dev" width={iconSize} height={iconSize} className="invert"/></div>: @realenv</Link>
                </div>
            </div>
        </footer>
    );
}
export default Footer;