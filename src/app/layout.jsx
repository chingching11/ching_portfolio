import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({ 
  weight: ['400', '700'],
  subsets: ["latin"] 
});

export const metadata = {
  title: "Ching",
  description: "Ching Ching Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <link rel="icon" href="/assets/images/favicon.ico" />
        </head>
      <body className={inter.className}>
        <Nav />
        <main className="container flex mx-auto px-4 py-8 justify-center text-center">         
            {children}
        </main>   
        <Footer />  
      </body>     
    </html>
  );
}
