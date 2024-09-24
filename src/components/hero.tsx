import Link from "next/link";
import { Features } from "./features";
import { buttonVariants } from "./ui/button";

export function Hero(): JSX.Element {
    return (
        <div className="flex h-auto w-full flex-col items-center justify-center overflow-hidden pt-40 sm:pt-0">
            <img src="/artwork.webp" alt="artwork" className="h-full object-cover w-full" />

            <div className="flex flex-col gap-4 px-4 sm:px-0 max-w-2xl mx-auto text-center sm:-mt-40">
                <h1 className="font-semibold text-[32px] sm:text-[44px] sm:leading-[56px]">
                    Unlock XRPL&apos;s potential with your MetaMask
                </h1>
                <div className="gap-2 flex flex-col px-2 sm:px-0">
                    <p className="text-[#FFFFFFB8] text-sm">If you have a MetaMask wallet now you have a XRPL one.</p>
                    <p className="text-[#FFFFFFB8] text-sm text-wrap">
                        With our XRP Ledger Snap with MetaMask snap support, you will have most of the features of XRPL right in your
                        MetaMask wallet.
                    </p>
                </div>
                <div className="pt-4">
                    <Link href="https://wallet.xrplevm.org " className={buttonVariants({ variant: "default" })}>
                        Get started
                    </Link>
                </div>
            </div>

            <Features />
        </div>
    );
}
