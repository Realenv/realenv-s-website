import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    images: '/realenv.png',
  },
  title: "Realenv's website I share my achivements & skills with you",
  description: "Hi, Just call me realenv, I would like to be more and more professional over the years, I am learning a lot of things, like coding in react, using next.js, i love rust, and I want to go to the ITMO university of St. Petersburg.",
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
      <body className="min-h-full flex flex-col justify-between overflow-x-hidden">
        <SpeedInsights/>
        <Analytics/>
        <Header/>
        <div className="height-of-header sticky top-0 left-0 z-20 bg-background w-full"></div>
        <div className="grow">{children}</div>
        <div className="height-of-header sticky top-0 left-0 z-23 bg-foreground w-full"></div>
        <Footer/>
      </body>
    </html>
  );
}
