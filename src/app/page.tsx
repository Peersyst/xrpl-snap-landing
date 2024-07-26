import { CTA } from "@/components/cta";
import { Faqs } from "@/components/faqs";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { MoreFeatures } from "@/components/more-features";

export default function Home(): JSX.Element {
    return (
        <div className="flex min-h-screen flex-col items-center">
            <Header />
            <Hero />
            <MoreFeatures />
            <Faqs />
            <CTA />
        </div>
    );
}
