/* s/o to Magic UI https://magicui.design/docs/components/ripple */

import React, { CSSProperties } from "react";

export interface RippleConfig {
    mainCircleSize: number;
    mainCircleOpacity: number;
    numCircles: number;
    top: string;
}

const RIPPLE_CONFIG = {
    desktop: {
        mainCircleSize: 595,
        mainCircleOpacity: 0.24,
        numCircles: 6,
        top: "26%",
    },
    mobile: {
        mainCircleSize: 353,
        mainCircleOpacity: 0.24,
        numCircles: 6,
        top: "16%",
    },
};

export interface RippleProps {
    config?: RippleConfig;
    mobile?: boolean;
}

const Ripple = React.memo(function Ripple({ config, mobile }: RippleProps) {
    const { mainCircleSize, mainCircleOpacity, numCircles, top } = config || (mobile ? RIPPLE_CONFIG.mobile : RIPPLE_CONFIG.desktop);
    return (
        <div className={`absolute inset-1 sm:flex ${mobile ? "sm:hidden" : "hidden"}`}>
            {Array.from({ length: numCircles }, (_, i) => {
                const size = mainCircleSize + i * 150; // px
                const opacity = mainCircleOpacity - i * 0.03;
                const animationDelay = `${i * 0.06}s`;

                return (
                    <div
                        key={i}
                        className={`absolute animate-ripple rounded-full bg-[#32E685]/10 border top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 [--i:${i}]`}
                        style={
                            {
                                top: top,
                                width: `${size}px`,
                                height: `${size}px`,
                                opacity: opacity,
                                animationDelay: animationDelay,
                                borderStyle: "solid",
                                borderWidth: "1px",
                                borderColor: "#32E685",
                                transform: "translate(-50%, -50%) scale(1)",
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
