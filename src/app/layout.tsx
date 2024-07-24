import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import clsx from "clsx";
import { Footer } from "@/components/footer";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "XRPL Snap",
    description: "XRPL Snap for Metamask",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element {
    return (
        <html lang="en">
            <body className={clsx(workSans.className, "dark")}>
                <main>{children}</main>
                <Footer />
                <TailwindIndicator />
            </body>
        </html>
    );
}
