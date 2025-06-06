import { Poppins } from "next/font/google";
import "./globals.css";
import "./custom.css"
import UpperNav from "@/components/UpperNav/UpperNav";
import LowerNav from "@/components/LowerNav/LowerNav";
import Footer from "@/components/Footer/Footer";


const poppins = Poppins({
 subsets : ['latin'],
weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
 display: "swap"
})

export const metadata = {
  title: "Ecobazar",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}  antialiased`}
      >
       <main>
        <UpperNav></UpperNav>
        <LowerNav></LowerNav>
          {children}
          <Footer></Footer>
       </main>
      </body>
    </html>
  );
}
