import Link from "next/link";
import { PeersystLogo } from "./peersyst-logo";

export function Footer(): JSX.Element {
    return (
        <footer className="bg-[#2B2B2E] relative z-20">
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
                        <Link href="" className="text-[#B0B0BA] text-sm transition-colors hover:text-[#B0B0BA]/60">
                            Docs
                        </Link>
                        <Link
                            href="https://github.com/Peersyst/xrpl-snap"
                            target="_blank"
                            className="text-[#B0B0BA] text-sm transition-colors hover:text-[#B0B0BA]/60"
                        >
                            Github
                        </Link>
                    </div>
                    <div className="w-36 flex flex-col gap-3 flex-1">
                        <p>Contact</p>
                        <Link href="mailto:info@peersyst.com" className="text-[#B0B0BA] text-sm transition-colors hover:text-[#B0B0BA]/60">
                            info@peersyst.com
                        </Link>
                        <Link
                            href="https://x.com/peersyst"
                            target="_blank"
                            className="text-[#B0B0BA] text-sm transition-colors hover:text-[#B0B0BA]/60"
                        >
                            X
                        </Link>
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
