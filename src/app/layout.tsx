import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { TailwindIndicator } from "@/components/tailwind-indicator";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "XRPL Snap",
    description: "XRPL Snap for Metamask",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element {
    return (
        <html lang="en">
            <body className={workSans.className}>
                {children}
                <TailwindIndicator />
            </body>
        </html>
    );
}
