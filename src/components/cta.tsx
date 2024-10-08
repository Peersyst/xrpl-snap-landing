import Link from "next/link";
import { buttonVariants } from "./ui/button";

export function CTA(): JSX.Element {
    return (
        <div className="w-full bg-primary h-[528px] sm:h-[635px] flex items-center justify-center sm:items-start sm:justify-start pt-[100px] sm:pt-[291px]">
            <div className="max-w-4xl mx-auto flex flex-col gap-12 px-4 lg:px-0 items-center">
                <h2 className="text-center font-semibold text-[44px]">Get started today, connect your MetaMask to XRPL</h2>
                <div>
                    <Link href="https://wallet.xrplevm.org " target="_blank" className={buttonVariants({ variant: "secondary" })}>
                        Get started
                    </Link>
                </div>
            </div>
        </div>
    );
}
