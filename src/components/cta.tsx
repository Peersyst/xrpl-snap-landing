import Link from "next/link";
import { buttonVariants } from "./ui/button";

export function CTA(): JSX.Element {
    return (
        <div className="w-full bg-primary h-[528px] sm:h-[472px] flex justify-center items-center">
            <div className="max-w-4xl mx-auto flex flex-col gap-12 px-4 lg:px-0 items-center">
                <p className="text-center font-semibold text-[44px]">Get started today, connect your Metamask to XRPL</p>

                <div>
                    <Link href="https://app.snap.xrplevm.org" target="_blank" className={buttonVariants({ variant: "secondary" })}>
                        Get started
                    </Link>
                </div>
            </div>
        </div>
    );
}
