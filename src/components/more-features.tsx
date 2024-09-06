"use client";

import React from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "./ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

export function MoreFeatures(): JSX.Element {
    const [api, setApi] = React.useState<CarouselApi>();

    function renderButtons(): JSX.Element {
        return (
            <div className="rounded-full px-5 py-3 bg-background border border-[#FFFFFF29] flex items-center justify-between w-[120px] sm:w-[88px]">
                <button
                    type="button"
                    aria-label="Scroll left"
                    disabled={!api?.canScrollPrev}
                    className={cn(!api?.canScrollPrev && "opacity-50")}
                    onClick={() => {
                        api?.scrollPrev();
                    }}
                >
                    <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                    type="button"
                    aria-label="Scroll right"
                    disabled={!api?.canScrollNext}
                    className={cn(!api?.canScrollNext && "opacity-50")}
                    onClick={() => {
                        api?.scrollNext();
                    }}
                >
                    <ChevronRight className="h-4 w-4" />
                </button>
            </div>
        );
    }

    return (
        <div className="bg-[#2B2B2E] w-full h-auto sm:h-[788px]">
            <div className="max-w-4xl mx-auto flex flex-col pt-12 sm:pt-20 pb-12 sm:pb-32 gap-6 sm:gap-12 px-4 lg:px-0">
                <div className="flex justify-between">
                    <p className="text-2xl sm:text-3xl font-semibold text-center sm:text-left">And many more features</p>
                    <div className="hidden sm:block">{renderButtons()}</div>
                </div>

                <Carousel
                    className="w-full"
                    setApi={setApi}
                    opts={{ loop: true }}
                    plugins={[
                        Autoplay({
                            delay: 3000,
                        }),
                    ]}
                >
                    <CarouselContent>
                        <CarouselItem className="basis-72">
                            <div className="p-8 flex flex-col justify-between text-wrap rounded-2xl h-[304px] bg-background relative">
                                <h3 className="text-2xl">Create XRPL account with MetaMask</h3>
                                <p className="text-sm text-[#B0B0BA]">Create new XRPL accounts with the same mnemonic from MetaMask.</p>
                                <img src="more-feature-1.webp" alt="gradient" className="absolute bottom-0 h-44 left-0" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-72">
                            <div className="p-8 flex flex-col justify-between text-wrap rounded-2xl h-[304px] bg-background relative">
                                <h3 className="text-2xl">Sign Any transaction</h3>
                                <p className="text-sm text-[#B0B0BA]">Full support for all transaction types in XRPL</p>
                                <img src="more-feature-2.webp" alt="gradient" className="absolute bottom-0 left-0 h-48 rotate-180" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-72">
                            <div className="p-8 flex flex-col justify-between text-wrap rounded-2xl h-[304px] bg-background relative">
                                <h3 className="text-2xl">On-ramp XRP with Transak</h3>
                                <p className="text-sm text-[#B0B0BA]">Buy XRP with credit card in seconds.</p>
                                <img src="more-feature-3.webp" alt="gradient" className="absolute top-0 right-0 h-40" />
                            </div>
                        </CarouselItem>

                        <CarouselItem className="basis-72">
                            <div className="p-8 flex flex-col justify-between text-wrap rounded-2xl h-[304px] bg-background relative">
                                <h3 className="text-2xl">All your transaction history</h3>
                                <p className="text-sm text-[#B0B0BA]">
                                    Always have your transaction history with all its details at your fingertips.
                                </p>
                                <img src="more-feature-1.webp" alt="gradient" className="absolute bottom-0 h-44 left-0" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-72">
                            <div className="p-8 flex flex-col justify-between text-wrap rounded-2xl h-[304px] bg-background relative">
                                <h3 className="text-2xl">And NFTs too</h3>
                                <p className="text-sm text-[#B0B0BA]">Not just tokens. Store and transfer your NFTs too with our wallet.</p>
                                <img src="more-feature-2.webp" alt="gradient" className="absolute top-0 right-0 h-72" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-72">
                            <div className="p-8 flex flex-col justify-between text-wrap rounded-2xl h-[304px] bg-background relative">
                                <h3 className="text-2xl">Mainnet or Testnet</h3>
                                <p className="text-sm text-[#B0B0BA]">
                                    Full support for both mainnet and testnet. All powered by the convenience of your MetaMask Snap
                                    integration.
                                </p>
                                <img src="more-feature-3.webp" alt="gradient" className="absolute top-0 right-0 h-40" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-72">
                            <div className="p-8 flex flex-col justify-between text-wrap rounded-2xl h-[304px] bg-background relative">
                                <h3 className="text-2xl">Access Account Details</h3>
                                <p className="text-sm text-[#B0B0BA]">
                                    Instantly retrieve all your account details and balances with ease.
                                </p>
                                <img src="more-feature-2.webp" alt="gradient" className="absolute top-0 right-0 h-72" />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>

                <div className="flex sm:hidden justify-center">{renderButtons()}</div>
            </div>
        </div>
    );
}
