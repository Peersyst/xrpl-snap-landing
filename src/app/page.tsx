import { CTA } from "@/components/cta";
import { Faqs } from "@/components/faqs";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { MoreFeatures } from "@/components/more-features";
import { VideoPlayer } from "@/components/video-player";

export default function Home(): JSX.Element {
    return (
        <div className="flex min-h-screen flex-col items-center">
            <Header />
            <Hero />
            <MoreFeatures />
            <div className="hidden sm:block w-full relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-4 sm:px-6 lg:px-8 z-10">
                    <VideoPlayer />
                </div>
            </div>
            <CTA />
            <Faqs />
        </div>
    );
}
