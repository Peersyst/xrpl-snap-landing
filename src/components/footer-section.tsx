import Link from "next/link";

export type LinkProps = {
    title: string;
    href: string;
};

export type FooterSectionProps = {
    title: string;
    links: LinkProps[];
};

export function FooterSection({ links, title }: FooterSectionProps): JSX.Element {
    return (
        <div className="w-36 flex flex-col gap-3 flex-1">
            <p>{title}</p>
            {links.map((link) => (
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
    );
}
