import { Logo } from "./logo";

export function Footer(): JSX.Element {
    return (
        <footer className="bg-[#2B2B2E]">
            <div className="mx-auto max-w-4xl w-full h-52 flex justify-between pt-16">
                <div className="flex flex-col gap-4">
                    <Logo />
                    <p className="text-[#B0B0BA] text-sm">Copyright © {new Date().getFullYear()}</p>
                </div>

                <div className="flex gap-3">
                    <div className="w-36 flex flex-col gap-4">
                        <p>Resources</p>
                        <a className="text-[#B0B0BA] text-sm">Docs</a>
                        <a className="text-[#B0B0BA] text-sm">Github</a>
                    </div>
                    <div className="w-36 flex flex-col gap-4">
                        <p>Contact</p>
                        <a className="text-[#B0B0BA] text-sm">info@peersyst.com</a>
                        <a className="text-[#B0B0BA] text-sm">X</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
