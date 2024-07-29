"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { MobileFeatures } from "./mobile-features";
import { FeaturesTabs } from "./features-tabs";

export function Features(): JSX.Element {
    const isMobile = useMediaQuery("(max-width: 640px)");

    return (
        <div id="features" className="max-w-4xl flex flex-col py-20 gap-14 z-10 px-4 lg:px-0">
            <p className="text-2xl sm:text-3xl font-semibold text-center sm:text-left">
                Enter the XRPL universe <br />
                through Metamask
            </p>

            {isMobile ? <MobileFeatures /> : <FeaturesTabs />}
        </div>
    );
}
