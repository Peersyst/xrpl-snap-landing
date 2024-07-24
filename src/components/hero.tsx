import Ripple from "./ui/ripple";

export function Hero(): JSX.Element {
    return (
        <div className="h-[700px] w-full">
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden md:shadow-xl">
                <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">Ripple</p>
                <Ripple />
            </div>
        </div>
    );
}
