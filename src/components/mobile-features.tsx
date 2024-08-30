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
                            <h3 className="font-semibold text-lg text-white">Complete XRPL Support in MetaMask</h3>
                            <p className="text-sm text-[#B0B0BA]">
                                Easily create, manage, and sign any XRPL transaction directly within MetaMask. Seamlessly connect, secure
                                assets, and explore the full potential of the XRP Ledger.
                            </p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="flex flex-col gap-10">
                        <div className="w-full border-8 border-[#39393D] rounded-xl">
                            <img src="transak.jpg" alt="feature-showcase" className="rounded-sm w-full h-full" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <h3 className="font-semibold text-lg text-white">Buy XRP Directly from MetaMask</h3>
                            <p className="text-sm text-[#B0B0BA]">
                                Quickly purchase XRP directly within MetaMask using our integrated onramp. Start transacting on the XRPL
                                with ease.
                            </p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="flex flex-col gap-10">
                        <div className="w-full border-8 border-[#39393D] rounded-xl">
                            <img src="bridge.jpg" alt="feature-showcase" className="rounded-sm w-full h-full" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <h3 className="font-semibold text-lg text-white">Bridge Assets Between EVM and XRPL</h3>
                            <p className="text-sm text-[#B0B0BA]">
                                Effortlessly bridge your assets between EVM chains, including the XRPL EVM Sidechain, and the XRP Ledger
                                using our wallet and MetaMask Snap integration.
                            </p>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    );
}
