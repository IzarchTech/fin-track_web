import { Jost, Teko } from "next/font/google";

export const jost = Jost({
  weight: ["100", "400", "900"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
});

export const teko = Teko({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-teko",
});
