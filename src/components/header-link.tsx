import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";

export type HeaderLinkProps = {
    label: string;
    url: string;
    target?: HTMLAttributeAnchorTarget;
};

export function HeaderLink({ label, url, target }: HeaderLinkProps) {
    return (
        <Link href={url} target={target} className="transition-colors hover:text-[#FFFFFFB8]/60">
            {label}
        </Link>
    );
}
