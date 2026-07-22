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
    return (
        <footer className={`${styles.footerStyle} auto-sizing-base ${pt_sans.variable} mt-15`}>
            <div>
                <Image src="realenv.svg" width={256} height={256} alt="realenv" className="shadow-2xl rounded-xs shadow-gray-600/20" />
            </div>
            <div>
                <h3>Common links</h3>
                <div>
                    <Link href="">Home</Link>
                    <Link href="">Biography</Link>
                    <Link href="">Skills</Link>
                    <Link href="">Projects & contributions</Link>
                </div>
            </div>
            <div>
                <h3>Contacts</h3>
                <div>
                    <Link href=""><Phone/>: --------</Link>
                    <Link href=""><Mail/>: --------</Link>
                    <Link href=""><Image src="/icons/github.svg" alt="github" width={54} height={54} className="invert"/>: @realenv</Link>
                    <Link href=""><Image src="/icons/dev.svg" alt="dev" width={54} height={54} className="invert"/>: @realenv</Link>
                </div>
            </div>
        </footer>
    );
}
export default Footer;