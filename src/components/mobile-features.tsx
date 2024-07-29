import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export function MobileFeatures(): JSX.Element {
    return (
        <div className="flex sm:hidden">
            <Carousel
                className="w-full max-w-xs"
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}
            >
                <CarouselContent>
                    <CarouselItem className="flex flex-col gap-10">
                        <div className="w-full border-8 border-[#39393D] rounded-xl">
                            <img src="account_info.jpg" alt="feature-showcase" className="rounded-sm w-full h-full" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="font-semibold text-lg text-white">XRPL in MetaMask</p>
                            <p className="text-sm text-[#B0B0BA]">
                                Easily create and manage an XRPL account in MetaMask with our wallet. Seamlessly connect, secure assets, and
                                explore XRPL&apos;`s potential.
                            </p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="flex flex-col gap-10">
                        <div className="w-full border-8 border-[#39393D] rounded-xl">
                            <img src="send.jpg" alt="feature-showcase" className="rounded-sm w-full h-full" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="font-semibold text-lg text-white">Sign any transaction</p>
                            <p className="text-sm text-[#B0B0BA]">Sign and send XRPL transactions with your Metamask</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="flex flex-col gap-10">
                        <div className="w-full border-8 border-[#39393D] rounded-xl">
                            <img src="bridge.jpg" alt="feature-showcase" className="rounded-sm w-full h-full" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="font-semibold text-lg text-white">Bridge your assets seamlessly to XRPL</p>
                            <p className="text-sm text-[#B0B0BA]">
                                Seamlessly bridge your assets to XRPL with our wallet and Metamask Snap integration. Securely transfer,
                                manage, and explore new opportunities
                            </p>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    );
}
