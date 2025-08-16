"use client";

import CoreButton from "@/components/atoms/CoreButton";
import GoToTop from "@/components/molecules/GoToTopBTN";
import HeroImage from "@/components/molecules/HeroImage";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white text-black">
            {/* Scroll To Top */}
            <GoToTop />

            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-24 border-b-4 border-black bg-gradient-to-r from-yellow-200 to-pink-200">
                {/* Hero Content */}
                <div className="max-w-xl">
                    <h1 className="text-4xl md:text-6xl font-extrabold uppercase leading-tight mb-6 tracking-tight">
                        Mall-Quality Apparel <br /> & Everyday Goods
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mb-6">
                        <span className="font-bold underline">LYN STORE</span> —
                        Mall quality you deserve. Prices you’ll love. Style you
                        can trust.
                    </p>

                    <div className="flex gap-4">
                        <CoreButton className="bg-yellow-300 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] text-black font-bold px-6 py-3 uppercase">
                            Shop Now
                        </CoreButton>
                        <CoreButton className="border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] px-6 py-3 font-bold uppercase bg-white hover:bg-gray-100">
                            Explore
                        </CoreButton>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="mt-10 md:mt-0 md:ml-8 w-full md:w-1/2">
                    <HeroImage
                        src={
                            "https://images.pexels.com/photos/11671964/pexels-photo-11671964.jpeg"
                        }
                        alt={"hero image"}
                        caption=""
                    />
                </div>
            </section>

            {/* Featured Collections */}
            <section className="px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-3 gap-10 border-b-4 border-black">
                {[
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
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-white border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] p-8 flex flex-col items-center text-center hover:translate-y-1 transition"
                    >
                        <div className="w-full h-48 bg-gray-100 border-2 border-black mb-6 flex items-center justify-center">
                            <span className="font-bold uppercase text-gray-500">
                                {item.title} Img
                            </span>
                        </div>
                        <h3 className="text-2xl font-extrabold uppercase mb-2">
                            {item.title}
                        </h3>
                        <p className="text-base">{item.desc}</p>
                    </div>
                ))}
            </section>

            {/* Call To Action */}
            <section className="px-6 md:px-12 py-24 flex flex-col items-center justify-center text-center bg-yellow-200 border-t-4 border-black">
                <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-6">
                    Join The Movement
                </h2>
                <p className="text-lg md:text-xl max-w-xl mb-6">
                    Be the first to access exclusive drops, mall-quality
                    apparel, and lifestyle goods crafted for bold living.
                </p>
                <Button className="bg-pink-400 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] text-black font-bold px-8 py-4 uppercase">
                    Subscribe
                </Button>
            </section>

            {/* Footer */}
            <footer className="text-center py-6 text-sm border-t-4 border-black">
                © {new Date().getFullYear()} Lyn Store Apparel & Goods. All
                rights reserved.
            </footer>
        </main>
    );
}
