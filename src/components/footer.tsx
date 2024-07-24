import Link from "next/link";
import { PeersystLogo } from "./peersyst-logo";

type LinkProps = {
    title: string;
    href: string;
};

export function Footer(): JSX.Element {
    const resourcesLinks: LinkProps[] = [
        { title: "Docs", href: "" },
        { title: "Github", href: "https://github.com/Peersyst/xrpl-snap" },
    ];

    const contactLinks: LinkProps[] = [
        { title: "info@peersyst.com", href: "mailto:info@peersyst.com" },
        {
            title: "X",
            href: "https://x.com/peersyst",
        },
    ];

    return (
        <footer className="bg-[#2B2B2E] relative z-20 overflow-hidden">
            <div className="mx-auto max-w-4xl h-52 flex flex-col sm:flex-row sm:justify-between py-6 sm:pt-16 px-4 lg:px-0 gap-5 relative z-20">
                <div className="flex flex-col gap-3">
                    <Link href="https://peersyst.com/" target="_blank">
                        <PeersystLogo />
                    </Link>
                    <p className="text-[#B0B0BA] text-sm">Copyright © {new Date().getFullYear()}</p>
                </div>

                <div className="flex">
                    <div className="w-36 flex flex-col gap-3 flex-1">
                        <p>Resources</p>
                        {resourcesLinks.map((link) => (
                            <Link
                                key={link.title}
                                href={link.href}
                                target="_blank"
                                className="text-[#B0B0BA] text-sm transition-colors hover:text-[#B0B0BA]/60"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                    <div className="w-36 flex flex-col gap-3 flex-1">
                        <p>Contact</p>
                        {contactLinks.map((link) => (
                            <Link
                                key={link.title}
                                href={link.href}
                                target="_blank"
                                className="text-[#B0B0BA] text-sm transition-colors hover:text-[#B0B0BA]/60"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <img
                src="footer-image.png"
                alt="footer-image"
                className="absolute top-0 sm:top-auto sm:bottom-0 inset-x-1/3 sm:inset-x-auto lg:inset-x-1/3 h-20 sm:h-36 rotate-180 sm:rotate-0 z-10"
            />
        </footer>
    );
}
