"use client";

import React from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "./ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function MoreFeatures(): JSX.Element {
    const [api, setApi] = React.useState<CarouselApi>();

    function renderButtons(): JSX.Element {
        return (
            <div className="rounded-full px-5 py-3 bg-[#232325] border border-[#FFFFFF29] flex items-center justify-between w-[120px] sm:w-[88px]">
                <button
                    type="button"
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
        <div className="bg-[#2B2B2E] w-full ">
            <div className="max-w-4xl mx-auto flex flex-col pt-20 pb-32 gap-6 sm:gap-12 px-4 lg:px-0">
                <div className="flex justify-between">
                    <p className="text-2xl sm:text-3xl font-semibold text-center sm:text-left">And many more features</p>
                    <div className="hidden sm:block">{renderButtons()}</div>
                </div>

                <Carousel className="w-full" setApi={setApi} opts={{ loop: true }}>
                    <CarouselContent>
                        <CarouselItem className="basis-72">
                            <div className="p-8 flex flex-col justify-between text-wrap rounded-2xl h-[304px] bg-[#232325] relative">
                                <p className="text-2xl">Mainnet or Testnet</p>
                                <p className="text-sm text-[#B0B0BA]">
                                    Full support for both mainnet and testnet. All powered by the convenience of your Metamask Snap
                                    integration.
                                </p>
                                <img src="more-feature-1.png" alt="gradient" className="absolute bottom-0 h-44 left-0" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-72">
                            <div className="p-8 flex flex-col justify-between text-wrap rounded-2xl h-[304px] bg-[#232325] relative">
                                <p className="text-2xl">And NFTs too</p>
                                <p className="text-sm text-[#B0B0BA]">Not just tokens. Store and transfer your NFTs too with our wallet.</p>
                                <img src="more-feature-2.png" alt="gradient" className="absolute top-0 right-0 h-72" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-72">
                            <div className="p-8 flex flex-col justify-between text-wrap rounded-2xl h-[304px] bg-[#232325] relative">
                                <p className="text-2xl">Access Account Details</p>
                                <p className="text-sm text-[#B0B0BA]">
                                    Instantly retrieve all your account details and balances with ease.
                                </p>
                                <img src="more-feature-3.png" alt="gradient" className="absolute top-0 right-0 h-40" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-72">
                            <div className="p-8 flex flex-col justify-between text-wrap rounded-2xl h-[304px] bg-[#232325] relative">
                                <p className="text-2xl">All your transaction history</p>
                                <p className="text-sm text-[#B0B0BA]">
                                    Always have your transaction history with all its details at your fingertips.
                                </p>
                                <img src="more-feature-2.png" alt="gradient" className="absolute bottom-0 left-0 h-48 rotate-180" />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>

                <div className="flex sm:hidden justify-center">{renderButtons()}</div>
            </div>
        </div>
    );
}
