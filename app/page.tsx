import CoreButton from "@/components/atoms/CoreButton";
import FeaturedList from "@/components/molecules/FeaturedList";
import GoToTop from "@/components/molecules/GoToTopBTN";
import HeroImage from "@/components/molecules/HeroImage";
import HeroSection from "@/components/organisms/HeroSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";

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
                        url: "/featured1.jpeg",
                    },
                    {
                        title: "Accessories",
                        desc: "Bags, caps, and everyday add-ons to elevate your lifestyle.",
                        url: "/featured2.jpg",
                    },
                    {
                        title: "Lifestyle Goods",
                        desc: "Curated essentials blending utility with bold design.",
                        url: "/featured3.jpg",
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
            </section>

            <section className="px-6 md:px-12 py-24 flex flex-col items-center justify-center text-center bg-blue-200 border-t-4 border-black">
                <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-6">
                    Contact Us
                </h2>
                <p className="text-lg md:text-xl max-w-xl mb-6">
                    Got questions? We’re here to help. Message us directly on
                    Facebook for the fastest response.
                </p>
                <CoreButton
                    color="blue"
                    size="2xl"
                    className="text-xl font-bold "
                    asChild
                >
                    <Link
                        href="https://www.facebook.com/lyn.cabig.mapano" // replace with your actual page link
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Message Us on Facebook
                    </Link>
                </CoreButton>
            </section>
            <section className="px-6 md:px-12 py-16 bg-yellow-200 border-t-4 border-b-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-center mb-8">
                    Delivery Spots in CDO
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {/* Spot 1 */}
                    <div className="bg-white border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] p-6 flex flex-col items-center text-center">
                        <div className="w-full h-40 bg-yellow-100 border-2 border-black mb-4 flex items-center justify-center">
                            <span className="font-bold uppercase">
                                SM Downtown Image
                            </span>
                        </div>
                        <h3 className="text-2xl font-extrabold uppercase mb-2">
                            SM Downtown
                        </h3>
                        <p>
                            Pick up your orders conveniently at SM Downtown
                            Cagayan de Oro.
                        </p>
                    </div>

                    {/* Spot 2 */}
                    <div className="bg-white border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] p-6 flex flex-col items-center text-center">
                        <div className="w-full h-40 bg-yellow-100 border-2 border-black mb-4 flex items-center justify-center">
                            <span className="font-bold uppercase">
                                Other Spot Image
                            </span>
                        </div>
                        <h3 className="text-2xl font-extrabold uppercase mb-2">
                            Other Spot
                        </h3>
                        <p>
                            Another convenient location for Lyn Store
                            deliveries.
                        </p>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer className="text-center py-6 text-sm border-t-4 border-black">
                © {new Date().getFullYear()} Apparel & Goods. All rights
                reserved.
            </footer>
        </main>
    );
}
