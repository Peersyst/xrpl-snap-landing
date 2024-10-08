import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { HeaderLink, HeaderLinkProps } from "./header-link";

const headerLinks: HeaderLinkProps[] = [
    { label: "Features", url: "#features" },
    { label: "FAQ", url: "#faq" },
    { label: "Github", url: "https://github.com/Peersyst/xrpl-snap", target: "_blank", showIcon: true },
    { label: "Security audit", url: "https://sayfer.io/audits/metamask-snap-audit-report-for-peersyst/", target: "_blank", showIcon: true },
    { label: "Support", url: "https://discord.gg/xrplevm", target: "_blank", showIcon: true },
];

export function Header(): JSX.Element {
    return (
        <header className="mx-auto max-w-4xl w-full pt-5 sm:pt-12 absolute z-50">
            <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-0 px-4 lg:px-0">
                <div className="flex items-center flex-1 space-x-12 justify-between sm:justify-start">
                    <p className="text-base sm:text-lg font-semibold">XRP Ledger Snap</p>

                    <nav className="grid grid-cols-3 gap-2 sm:flex sm:space-x-6 text-[#FFFFFFB8] text-xs z-10">
                        {headerLinks.map((link) => (
                            <HeaderLink key={link.label} {...link} />
                        ))}
                    </nav>
                </div>

                <div>
                    <Link
                        href="https://wallet.xrplevm.org "
                        target="_blank"
                        className={cn("w-full", buttonVariants({ variant: "outline", size: "sm" }))}
                    >
                        Access wallet
                    </Link>
                </div>
            </div>
        </header>
    );
}
