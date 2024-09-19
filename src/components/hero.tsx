import Link from "next/link";
import { Features } from "./features";
import { buttonVariants } from "./ui/button";

export function Hero(): JSX.Element {
    return (
        <div className="flex h-auto w-full flex-col items-center justify-center overflow-hidden">
            <div className="max-w-2xl flex flex-col text-center">
                <div className="flex items-center justify-center pt-40 sm:pt-[281px]">
                    <img src="/3d-logo.png" alt="3d-xrpl-logo" className="h-60 w-72" />
                </div>

                <div className="flex flex-col gap-4 px-4 sm:px-0 pt-20 sm:pt-48">
                    <h1 className="font-semibold text-[32px] sm:text-[44px] sm:leading-[56px]">
                        Unlock XRPL&apos;s potential with your MetaMask
                    </h1>
                    <div className="gap-2 flex flex-col px-2 sm:px-0">
                        <p className="text-[#FFFFFFB8] text-sm">If you have a MetaMask wallet now you have a XRPL one.</p>
                        <p className="text-[#FFFFFFB8] text-sm text-wrap">
                            With our XRPL wallet with MetaMask snap support, you will have most of the features of XRPL right in your
                            MetaMask wallet.
                        </p>
                    </div>
                    <div className="pt-4">
                        <Link href="https://wallet.xrplevm.org " className={buttonVariants({ variant: "default" })}>
                            Get started
                        </Link>
                    </div>
                </div>
            </div>

            <Features />
        </div>
    );
}
