import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { jost, teko } from "./fonts";
import Footer from "./_components/footer";

export const metadata: Metadata = {
  title: "FinTrack",
  description:
    "Stay on top of your finances with our intuitive and user-friendly expense and income tracker. Whether you’re managing your personal budget, saving for a goal, or monitoring your business expenses, FinTrack provides the tools you need to stay organized and in control.",
  openGraph: {
    title: "FinTrack",
    description:
      "Stay on top of your finances with our intuitive and user-friendly expense and income tracker. Whether you’re managing your personal budget, saving for a goal, or monitoring your business expenses, FinTrack provides the tools you need to stay organized and in control.",
    type: "website",
  },
  twitter: {
    title: "FinTrack",
    description:
      "Stay on top of your finances with our intuitive and user-friendly expense and income tracker. Whether you’re managing your personal budget, saving for a goal, or monitoring your business expenses, FinTrack provides the tools you need to stay organized and in control.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(jost.variable, teko.variable)}>
      <body
        className={cn(
          "min-h-screen w-screen bg-background text-foreground font-sans antialiased flex flex-col"
        )}
      >
        {children}

        <div className="flex-1" />
        <Footer />
      </body>
    </html>
  );
}
