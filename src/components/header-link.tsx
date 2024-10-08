import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";

export type HeaderLinkProps = {
    label: string;
    url: string;
    target?: HTMLAttributeAnchorTarget;
    showIcon?: boolean;
};

export function HeaderLink({ label, url, target, showIcon }: HeaderLinkProps) {
    return (
        <Link href={url} target={target} className="transition-colors hover:text-[#FFFFFFB8]/60 flex items-center gap-1">
            {label}
            {showIcon && <ArrowUpRightIcon size={16} />}
        </Link>
    );
}
