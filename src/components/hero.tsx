import { HeroLogo } from "./hero-logo";
import { Button } from "./ui/button";
import Ripple from "./ui/ripple";

export function Hero(): JSX.Element {
    return (
        <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden shadow-xl">
            <div className="relative max-w-2xl flex flex-col text-center pt-32 z-10">
                <div className="flex items-center justify-center">
                    <HeroLogo />
                </div>
                <div className="flex flex-col gap-8 pt-20 px-4 sm:px-0">
                    <h1 className="font-semibold text-[32px] sm:text-[44px]">Unlock XRPL&apos;s potential with your Metamask</h1>
                    <div className="gap-2 flex flex-col px-2 sm:px-0">
                        <p className="text-[#FFFFFFB8] text-sm">If you have a Metamask wallet now you have a XRPL one.</p>
                        <p className="text-[#FFFFFFB8] text-sm text-wrap">
                            With our XRPL wallet with Metamask snap support, you will have most of the features of XRPL right in your
                            Metamask wallet.
                        </p>
                    </div>
                    <div>
                        <Button>Get started</Button>
                    </div>
                </div>
            </div>

            <Ripple />

            <div className="pointer-events-none absolute h-1/3 inset-x-0 bottom-0 bg-gradient-to-t dark:from-background" />
        </div>
    );
}
