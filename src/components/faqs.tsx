const faqs: { question: string; answer: string }[] = [
    {
        question: "What is MetaMask Snaps?",
        answer: "MetaMask Snaps allows users to add features and functionality to their MetaMask wallet. Individual Snaps are features created by third-party developers that MetaMask users can install directly into their wallet.",
    },
    {
        question: "How can I install Metamask snap for XRPL?",
        answer: "Simply click on Access Wallet and follow the instructions to install the Snap in your MetaMask. Once completed, you'll have the wallet connected to your MetaMask. Just make sure to have the MetaMask extension installed in your browser.",
    },
    { question: "Is it free?", answer: "Yes but keep in mind that network fees may apply." },
    {
        question: "How do I ensure I don't lose access to the wallet?",
        answer: "As long as you have access to your MetaMask account or can recover it, you'll be able to access the XRPL wallet.",
    },
];

export function Faqs(): JSX.Element {
    return (
        <div id="faq" className="max-w-4xl flex flex-col py-12 sm:pt-20 sm:pb-56 gap-6 sm:gap-12 px-4 lg:px-0 w-full">
            <p className="text-3xl font-semibold text-left">FAQ</p>

            <div className="flex flex-col gap-3">
                {faqs.map((faq, index) => (
                    <div key={`faq-${index}`} className="bg-[#2B2B2E] rounded-xl p-8">
                        <p className="font-semibold text-lg">{faq.question}</p>
                        <p className="text-sm text-[#B0B0BA]">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
