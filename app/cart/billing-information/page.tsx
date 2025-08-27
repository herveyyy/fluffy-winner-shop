import { Input } from "@/components/ui/input";
import React from "react";

const BillingInformationPage = () => {
    return (
        <div className="min-h-screen mt-12 flex items-center justify-center md:bg-gray-50 bg-white  px-4">
            <form className="w-full max-w-md bg-white md:border-4 md:shadow-[6px_6px_0px_rgba(0,0,0,1)] border-black rounded-2xl p-6 space-y-5">
                <h2 className="text-3xl font-extrabold uppercase text-center md:border-b-4 border-black pb-2">
                    Billing Info
                </h2>

                <div>
                    <label className="block font-bold mb-1">Full Name</label>
                    <Input
                        type="text"
                        className="w-full border-2 border-black rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="John Doe"
                    />
                </div>

                <div>
                    <label className="block font-bold mb-1">Email</label>
                    <Input
                        type="email"
                        className="w-full border-2 border-black rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="johndoe@email.com"
                    />
                </div>

                <div>
                    <label className="block font-bold mb-1">Address</label>
                    <Input
                        type="text"
                        className="w-full border-2 border-black rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="123 Main St"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block font-bold mb-1">City</label>
                        <Input
                            type="text"
                            className="w-full border-2 border-black rounded-xl px-3 py-2"
                            placeholder="New York"
                        />
                    </div>
                    <div>
                        <label className="block font-bold mb-1">Zip</label>
                        <Input
                            type="text"
                            className="w-full border-2 border-black rounded-xl px-3 py-2"
                            placeholder="10001"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-yellow-300 border-2 border-black rounded-xl px-4 py-2 font-bold shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-transform"
                >
                    Continue to Payment
                </button>
            </form>
        </div>
    );
};

export default BillingInformationPage;
