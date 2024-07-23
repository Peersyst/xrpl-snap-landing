import Link from "next/link";
import { Button } from "./ui/button";

export function Header(): JSX.Element {
    return (
        <header className="mx-auto max-w-4xl w-full pt-12">
            <div className="flex items-center justify-between space-x-12">
                <p className="text-lg font-semibold">XRPL Wallet</p>

                <div className="flex flex-1 space-x-6 text-white/75 text-xs">
                    <Link href="#features">Features</Link>
                    <Link href="#faq">FAQ</Link>
                    <p>Github</p>
                </div>

                <Button variant="outline">Access wallet</Button>
            </div>
        </header>
    );
}
