import React from "react";

type Props = {};

const HowToBuy = (props: Props) => {
    return (
        <section className="px-6 md:px-12 py-24 flex flex-col items-center justify-center text-center bg-yellow-200 border-t-4 border-black">
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-12">
                How to Buy
            </h2>

            <div className="space-y-10 max-w-2xl w-full">
                {[
                    "Cart some items",
                    "Checkout, fill the address form & generate your QR",
                    "Share the QR with the cashier via Messenger",
                    "Wait for the cashier to show you their QR code to pay",
                    "Get confirmation — you're done!",
                ].map((step, i) => (
                    <div
                        key={i}
                        className="flex flex-col md:flex-row items-center md:items-start text-left gap-4"
                    >
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-pink-400 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] text-xl font-extrabold rounded-full">
                            {i + 1}
                        </div>
                        <p className="text-lg md:text-xl font-medium">{step}</p>
                    </div>
                ))}
            </div>

            {/* Cash on Delivery Note */}
            <p className="mt-12 text-lg md:text-xl font-bold  border-2 border-black bg-white p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded">
                Cash on Delivery available for{" "}
                <span className="uppercase">CDO Downtown</span> customers only.
            </p>
        </section>
    );
};

export default HowToBuy;
