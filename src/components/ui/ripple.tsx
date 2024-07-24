/* s/o to Magic UI https://magicui.design/docs/components/ripple */

"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import React, { CSSProperties } from "react";

interface RippleProps {
    mainCircleSize?: number;
    mainCircleOpacity?: number;
    numCircles?: number;
}

const Ripple = React.memo(function Ripple({ mainCircleSize = 595, mainCircleOpacity = 0.24, numCircles = 6 }: RippleProps) {
    const isMobile = useMediaQuery("(max-width: 640px)");
    const dynamicMainCircleSize = isMobile ? 353 : mainCircleSize;

    return (
        <div className="absolute inset-1 flex bg-white/5">
            {Array.from({ length: numCircles }, (_, i) => {
                const size = dynamicMainCircleSize + i * 150; // px
                const opacity = mainCircleOpacity - i * 0.03;
                const animationDelay = `${i * 0.06}s`;

                return (
                    <div
                        key={i}
                        className={`absolute animate-ripple rounded-full bg-[#32E685]/10 border top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 [--i:${i}]`}
                        style={
                            {
                                top: "35%",
                                width: `${size}px`,
                                height: `${size}px`,
                                opacity: opacity,
                                animationDelay: animationDelay,
                                borderStyle: "solid",
                                borderWidth: "1px",
                                borderColor: "#32E685",
                            } as CSSProperties
                        }
                    />
                );
            })}
        </div>
    );
});

Ripple.displayName = "Ripple";

export default Ripple;
