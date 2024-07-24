import { HeroLogo } from "./hero-logo";
import { Button } from "./ui/button";
import Ripple from "./ui/ripple";

export function Hero(): JSX.Element {
    return (
        <div className="h-auto w-full">
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden shadow-xl">
                <div className="relative max-w-2xl flex flex-col text-center pt-52 z-10">
                    <div className="flex items-center justify-center">
                        <HeroLogo />
                    </div>
                    <div className="flex flex-col gap-8 pt-20">
                        <p className="font-semibold text-[32px] sm:text-[44px]">XRPL + Metamask Snaps</p>
                        <div className="gap-2 flex flex-col">
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
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-white dark:from-background" />
        </div>
    );
}
