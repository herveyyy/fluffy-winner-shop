"use client";

import CoreButton from "@/components/atoms/CoreButton";
import FeaturedList from "@/components/molecules/FeaturedList";
import GoToTop from "@/components/molecules/GoToTopBTN";
import HeroImage from "@/components/molecules/HeroImage";
import HeroSection from "@/components/organisms/HeroSection";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white text-black">
            {/* Scroll To Top */}
            <GoToTop />

            {/* Hero Section */}
            <HeroSection />
            {/* Featured Collections */}
            <FeaturedList
                items={[
                    {
                        title: "Apparel",
                        desc: "Premium T-Shirts, hoodies, and outerwear designed for comfort and style.",
                    },
                    {
                        title: "Accessories",
                        desc: "Bags, caps, and everyday add-ons to elevate your lifestyle.",
                    },
                    {
                        title: "Lifestyle Goods",
                        desc: "Curated essentials blending utility with bold design.",
                    },
                ]}
            />

            {/* Call To Action */}
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
                            <p className="text-lg md:text-xl font-medium">
                                {step}
                            </p>
                        </div>
                    ))}
                </div>

                <CoreButton className="mt-12 bg-pink-400 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] text-black font-bold px-8 py-4 uppercase">
                    Subscribe
                </CoreButton>
            </section>

            {/* Footer */}
            <footer className="text-center py-6 text-sm border-t-4 border-black">
                © {new Date().getFullYear()} Lyn Store Apparel & Goods. All
                rights reserved.
            </footer>
        </main>
    );
}
