import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { HeaderLink, HeaderLinkProps } from "./header-link";

const headerLinks: HeaderLinkProps[] = [
    { label: "Features", url: "#features" },
    { label: "FAQ", url: "#faq" },
    { label: "Github", url: "https://github.com/Peersyst/xrpl-snap" },
];

export function Header(): JSX.Element {
    return (
        <header className="mx-auto max-w-4xl w-full pt-12">
            <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-0">
                <div className="flex items-center flex-1 space-x-12 justify-between sm:justify-start">
                    <p className="text-lg font-semibold">XRPL Wallet</p>

                    <div className="flex space-x-6 text-[#FFFFFFB8] text-xs">
                        {headerLinks.map((link) => (
                            <HeaderLink key={link.label} {...link} />
                        ))}
                    </div>
                </div>

                <div>
                    <Link href="https://xrpl-snap.vercel.app/" className={cn("w-full", buttonVariants({ variant: "outline" }))}>
                        Access wallet
                    </Link>
                </div>
            </div>
        </header>
    );
}
