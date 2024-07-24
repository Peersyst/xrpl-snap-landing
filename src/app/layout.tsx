import type { Metadata } from "next";
import "@/styles/globals.css";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import clsx from "clsx";
import { Footer } from "@/components/footer";
import { workSans } from "@/lib/fonts";

export const metadata: Metadata = {
    title: "XRPL Snap",
    description: "XRPL Snap for Metamask",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element {
    return (
        <html lang="en">
            <body className={clsx(workSans.className, "dark")}>
                <main className="px-4 lg:px-0">{children}</main>
                <Footer />
                <TailwindIndicator />
            </body>
        </html>
    );
}
