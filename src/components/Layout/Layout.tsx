import { ReactNode } from "react";
import { Righteous } from "@next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-righteous",
});

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-emerald-100">
      <div
        className={`${righteous.variable} font-sans px-6 mx-auto h-screen sm:max-w-screen-sm flex flex-col`}
      >
        <Header />
        <main className="flex-grow flex flex-col justify-center items-center">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
