import type { Metadata } from "next";
import "@/styles/globals.css";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import clsx from "clsx";
import { Footer } from "@/components/footer";
import { workSans } from "@/lib/fonts";
import Script from "next/script";

export const metadata: Metadata = {
    title: "XRP Ledger Snap",
    description:
        "Manage XRP, XRPL-based tokens and NFTs, bridge from EVM to XRPL, and connect to XRP Ledger dApps with the official XRP Ledger Snap for Metamask.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element {
    return (
        <html lang="en">
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-GFJ3PPZ2SR" strategy="afterInteractive" />
            <Script id="google-analytics">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GFJ3PPZ2SR');
          `}
            </Script>
            <body className={clsx(workSans.className, "dark")}>
                <main>{children}</main>
                <Footer />
                <TailwindIndicator />
            </body>
        </html>
    );
}
