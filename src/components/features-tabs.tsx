import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function FeaturesTabs(): JSX.Element {
    return (
        <Tabs defaultValue="tab1" className="sm:flex hidden flex-col-reverse sm:flex-row gap-10 sm:gap-20 sm:items-center">
            <TabsList className="gap-12 sm:gap-14">
                <TabsTrigger className="sm:max-w-sm text-wrap text-left flex flex-col gap-2" value="tab1">
                    <h3 className="font-semibold text-lg text-white">Complete XRPL Support in MetaMask</h3>
                    <p className="text-sm text-[#B0B0BA]">
                        Easily create, manage, and sign any XRPL transaction directly within MetaMask. Seamlessly connect, secure assets,
                        and explore the full potential of the XRP Ledger.
                    </p>
                </TabsTrigger>
                <TabsTrigger className="sm:max-w-sm text-wrap text-left flex flex-col gap-2" value="tab2">
                    <h3 className="font-semibold text-lg text-white">Buy XRP Directly from MetaMask</h3>
                    <p className="text-sm text-[#B0B0BA]">
                        Quickly purchase XRP directly within MetaMask using our integrated onramp. Start transacting on the XRPL with ease.
                    </p>
                </TabsTrigger>
                <TabsTrigger className="sm:max-w-sm text-wrap text-left flex flex-col gap-2" value="tab3">
                    <h3 className="font-semibold text-lg text-white">Bridge Assets Between EVM and XRPL</h3>
                    <p className="text-sm text-[#B0B0BA]">
                        Effortlessly bridge your assets between EVM chains, including the XRPL EVM Sidechain, and the XRP Ledger using our
                        wallet and MetaMask Snap integration.
                    </p>
                </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="flex-1">
                <div className="w-full border-8 border-[#39393D] rounded-xl">
                    <img src="account_info.webp" alt="feature-showcase" className="rounded-sm w-full h-full" />
                </div>
            </TabsContent>
            <TabsContent value="tab2" className="flex-1">
                <div className="w-full border-8 border-[#39393D] rounded-xl">
                    <img src="transak.webp" alt="feature-showcase" className="rounded-sm w-full h-full" />
                </div>
            </TabsContent>
            <TabsContent value="tab3" className="flex-1">
                <div className="w-full border-8 border-[#39393D] rounded-xl">
                    <img src="bridge.webp" alt="feature-showcase" className="rounded-sm w-full h-full" />
                </div>
            </TabsContent>
        </Tabs>
    );
}
