import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export function Header(): JSX.Element {
    return (
        <header className="mx-auto max-w-4xl w-full pt-5 sm:pt-12 absolute z-50">
            <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-0 px-4 lg:px-0">
                <div className="flex items-center flex-1 space-x-12 justify-between sm:justify-start">
                    <p className="text-lg font-semibold">XRPL Wallet</p>

                    <nav className="flex space-x-6 text-[#FFFFFFB8] text-xs z-10">
                        <Link href="#features" className="transition-colors hover:text-[#FFFFFFB8]/60">
                            Features
                        </Link>
                        <Link href="#faq" className="transition-colors hover:text-[#FFFFFFB8]/60">
                            FAQ
                        </Link>
                        <Link
                            href="https://github.com/Peersyst/xrpl-snap"
                            target="_blank"
                            className="transition-colors hover:text-[#FFFFFFB8]/60"
                        >
                            Github
                        </Link>
                    </nav>
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
