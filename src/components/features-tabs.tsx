import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function FeaturesTabs(): JSX.Element {
    return (
        <Tabs defaultValue="tab1" className="flex flex-col-reverse sm:flex-row gap-10 sm:gap-20">
            <TabsList className="gap-12 sm:gap-14">
                <TabsTrigger className="sm:max-w-sm text-wrap text-left flex flex-col gap-2" value="tab1">
                    <p className="font-semibold text-lg text-white">XRPL in MetaMask</p>
                    <p className="text-sm text-[#B0B0BA]">
                        Easily create and manage an XRPL account in MetaMask with our wallet. Seamlessly connect, secure assets, and explore
                        XRPL&apos;`s potential.
                    </p>
                </TabsTrigger>
                <TabsTrigger className="sm:max-w-sm text-wrap text-left flex flex-col gap-2" value="tab2">
                    <p className="font-semibold text-lg text-white">Sign any transaction</p>
                    <p className="text-sm text-[#B0B0BA]">Sign and send XRPL transactions with your Metamask</p>
                </TabsTrigger>
                <TabsTrigger className="sm:max-w-sm text-wrap text-left flex flex-col gap-2" value="tab3">
                    <p className="font-semibold text-lg text-white">Bridge your assets seamlessly to XRPL</p>
                    <p className="text-sm text-[#B0B0BA]">
                        Seamlessly bridge your assets to XRPL with our wallet and Metamask Snap integration. Securely transfer, manage, and
                        explore new opportunities
                    </p>
                </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="flex-1">
                <div className="w-full">
                    <img src="feature.png" alt="feature-showcase" />
                </div>
            </TabsContent>
            <TabsContent value="tab2" className="flex-1">
                <div className="w-full">
                    <img src="feature.png" alt="feature-showcase" />
                </div>
            </TabsContent>
            <TabsContent value="tab3" className="flex-1">
                <div className="w-full">
                    <img src="feature.png" alt="feature-showcase" />
                </div>
            </TabsContent>
        </Tabs>
    );
}
