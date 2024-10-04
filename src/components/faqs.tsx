import Link from "next/link";

interface FAQ {
    question: string;
    answer: React.ReactNode;
}

const faqs: FAQ[] = [
    {
        question: "What are MetaMask Snaps?",
        answer: (
            <>
                MetaMask Snaps allows non-EVM (Ethereum Virtual Machine) blockchains, like the XRP Ledger, to integrate with the MetaMask
                browser wallet at no cost, making it easy and simple for MetaMask users to interact with these networks.
            </>
        ),
    },
    {
        question: "How can I install MetaMask Snap for XRPL?",
        answer: (
            <>
                Adding XRPL Snap to MetaMask is now easy with{" "}
                <Link target="_blank" href="https://wallet.xrplevm.org " className="hover:text-[#B0B0BA]/60">
                    <strong>wallet.xrplevm.org </strong>
                </Link>
                . On the XRPL Snap site, you will be prompted to add the XRPL network on MetaMask. Follow the steps in this{" "}
                <Link target="_blank" href="https://youtu.be/hG9gshvvZ8E?si=np527R6JxLw1msqT" className="hover:text-[#B0B0BA]/60">
                    <strong>video</strong>
                </Link>{" "}
                for a straight installation guide.
            </>
        ),
    },
    {
        question: "How to add XRP to MetaMask?",
        answer: (
            <>
                Adding XRP, XRP Ledger&apos;s native currency, to MetaMask is now easy with{" "}
                <Link target="_blank" href="https://wallet.xrplevm.org " className="hover:text-[#B0B0BA]/60">
                    <strong>wallet.xrplevm.org </strong>
                </Link>
                . On the XRPL Snap site, you will be prompted to add the XRPL network on MetaMask. Follow the steps displayed on your
                MetaMask to install XRPL. Once installed, an XRPL account will be generated from your MetaMask account mnemonic. To
                activate, buy or send some XRP. Watch our{" "}
                <Link target="_blank" href="https://youtu.be/hG9gshvvZ8E?si=np527R6JxLw1msqT" className="hover:text-[#B0B0BA]/60">
                    <strong>simple step-by-step tutorial</strong>
                </Link>{" "}
                on how to add XRP to MetaMask.
            </>
        ),
    },
    {
        question: "Can I buy Ripple on MetaMask?",
        answer: (
            <>
                No, Ripple is a company. You’re likely referring to XRP, the native cryptocurrency of XRPL, one of the top blockchains in
                the world. You can buy XRP using our Transak On-Ramp by clicking the ‘Buy’ button on{" "}
                <Link target="_blank" href="https://wallet.xrplevm.org " className="hover:text-[#B0B0BA]/60">
                    <strong>wallet.xrplevm.org </strong>
                </Link>
                .
            </>
        ),
    },
    {
        question: "Does MetaMask support XRPL?",
        answer: (
            <>
                Yes. MetaMask, thanks to our Snap, now supports XRP Ledger, its tokens, and all transaction types. A bridged XRP on the XRPL
                EVM can also be accessed through MetaMask. Visit{" "}
                <Link target="_blank" href="https://snap.xrplevm.org/" className="hover:text-[#B0B0BA]/60">
                    <strong>snap.xrplevm.org</strong>
                </Link>{" "}
                and add XRP Ledger Snap to MetaMask.
            </>
        ),
    },
    {
        question: "How much XRP is enough to activate my account?",
        answer: (
            <>
                On the XRPL blockchain, activating an account requires a 10 XRP non-usable reserve balance. This reserve is meant to prevent
                infinite account creation and spam on the network. Creating Trustlines and adding tokens will require an additional 2 XRP
                per asset. Learn more about{" "}
                <Link target="_blank" href="https://xrpl.org/docs/concepts/accounts/reserves" className="hover:text-[#B0B0BA]/60">
                    <strong>XRP Reserves</strong>
                </Link>
                .
            </>
        ),
    },
    {
        question: "How secure is MetaMask Snap with XRPL?",
        answer: (
            <>
                Developed by Peersyst, a proven blockchain industry leader and a key XRPL community contributor, the Snap has been
                thoroughly{" "}
                <Link
                    target="_blank"
                    href="https://sayfer.io/audits/metamask-snap-audit-report-for-peersyst/"
                    className="hover:text-[#B0B0BA]/60"
                >
                    <strong>audited by Sayfer</strong>
                </Link>
                , ensuring flawless security for an exceptional community. When interacting with the Snap, your XRP Ledger Snap inherits
                security from MetaMask, the gold standard of non-custodial wallets, long-proven and trusted by over 30 million users.
            </>
        ),
    },
];

export function Faqs(): JSX.Element {
    return (
        <div id="faq" className="max-w-4xl flex flex-col py-12 sm:pt-20 sm:pb-56 gap-6 sm:gap-12 px-4 lg:px-0 w-full">
            <p className="text-3xl font-semibold text-left">FAQ</p>

            <div className="flex flex-col gap-3">
                {faqs.map((faq, index) => (
                    <div key={`faq-${index}`} className="bg-[#2B2B2E] rounded-xl p-8">
                        <h3 className="font-semibold text-lg">{faq.question}</h3>
                        <p className="text-sm text-[#B0B0BA]">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
