"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { MobileXrplSnapLogo } from "./mobile-xrpl-snap-logo";
import { XRPLSnapLogo } from "./xrpl-snap-logo";

export function HeroLogo(): JSX.Element {
    const isMobile = useMediaQuery("(max-width: 640px)");

    return isMobile ? <MobileXrplSnapLogo /> : <XRPLSnapLogo />;
}
