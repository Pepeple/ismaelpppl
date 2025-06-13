import { Quantico} from "next/font/google";
import "./globals.css";
import Image from "next/image";


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
        className={`${quantico.variable} antialiased`}
      >
        {children}

        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
      </body>
      
      
    </html>
  );
}
