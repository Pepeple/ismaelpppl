
import { Quantico} from "next/font/google";
import "@/styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";


const quantico = Quantico({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-quantico",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio IsmaelResendis",
  description: "Portfolio of Ismael Resendis, showcasing projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${quantico.variable} antialiased h-[400vh]`}
      >
        <Header />
        {children}

        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
      </body>
      
      
    </html>
  );
}
