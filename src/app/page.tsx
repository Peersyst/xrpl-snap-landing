import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export default function Home(): JSX.Element {
    return (
        <div className="flex min-h-screen flex-col items-center">
            <Header />

            <Hero />
        </div>
    );
}
