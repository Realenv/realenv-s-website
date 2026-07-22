import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


export const metadata: Metadata = {
  title: "Realenv's website",
  description: "This is Realenv's website, realenv is fullstack dev who is learning russian and chinese, he would like to go to the MSU Moscow University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${poppins.variable}`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
