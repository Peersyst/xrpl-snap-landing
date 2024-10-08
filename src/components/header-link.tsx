"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
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
    const isMobile = useMediaQuery("(max-width: 640px)");
    return (
        <Link href={url} target={target} className="transition-colors hover:text-[#FFFFFFB8]/60 flex items-center gap-1">
            {label}
            {!isMobile && showIcon && <ArrowUpRightIcon size={16} />}
        </Link>
    );
}
