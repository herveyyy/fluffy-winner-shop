import CoreButton from "@/components/atoms/CoreButton";
import FeaturedList from "@/components/molecules/FeaturedList";
import GoToTop from "@/components/molecules/GoToTopBTN";
import HeroImage from "@/components/molecules/HeroImage";
import ContactUs from "@/components/organisms/ContactUs";
import DeliverSpots from "@/components/organisms/DeliverSpots";
import HeroSection from "@/components/organisms/HeroSection";
import HowToBuy from "@/components/organisms/HowToBuy";
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
            <HowToBuy />
            <ContactUs />
            <DeliverSpots
                spots={[
                    {
                        title: "SM Downtown",
                        description:
                            "Pick up your orders conveniently at SM Downtown Cagayan de Oro.",
                        imageUrl: "/images/sm-downtown.jpg", // optional, replace with actual path
                        startTime: "5:00 PM",
                        endTime: "7:00 PM",
                    },

                    {
                        title: "At your Location",
                        description: "Only for CDO downtown customers",
                        imageUrl: "/images/ayala-centrio.jpg",
                        startTime: "11:00 AM",
                        endTime: "7:00 PM",
                    },
                ]}
            />
            {/* Footer */}
            <footer className="text-center py-6 text-sm border-t-4 border-black">
                © {new Date().getFullYear()} Lyn Store Apparel & Goods. All
                rights reserved.
            </footer>
        </main>
    );
}
