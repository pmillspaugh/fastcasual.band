import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Righteous } from "@next/font/google";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-righteous",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${righteous.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
