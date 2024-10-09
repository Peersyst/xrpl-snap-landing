import Link from "next/link";
import { Features } from "./features";
import { buttonVariants } from "./ui/button";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./hero-scene"), {
    ssr: false,
});

const HeroLines = dynamic(() => import("./hero-lines"), {
    ssr: false,
});

export function Hero(): JSX.Element {
    return (
        <div className="flex h-auto w-full flex-col items-center justify-center overflow-hidden pt-40 sm:pt-0">
            <div className="h-[320px] sm:h-[700px] lg:h-[900px] object-cover w-full">
                <HeroScene />
                <HeroLines />
            </div>

            <div className="flex flex-col gap-4 px-4 sm:px-0 max-w-2xl mx-auto text-center sm:-mt-20">
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
