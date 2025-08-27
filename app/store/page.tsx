import { ProductCardProps } from "@/components/molecules/ProductCard";
import ProductFilters from "@/components/molecules/ProductFilters";
import ProductList from "@/components/organisms/ProductList";
import React from "react";

const products: ProductCardProps[] = [
    {
        id: "1",
        title: "Wireless Headphones",
        price: "120",
        description: "Noise cancelling, over-ear, long battery life.",
        image: "https://prd.place/400?id=37",
    },
    {
        id: "2",
        title: "Smartwatch",
        price: "180",
        description: "Track health, fitness, and notifications.",
        image: "https://prd.place/400?id=3",
    },
    {
        id: "3",
        title: "Gaming Mouse",
        price: "60",
        description: "Ergonomic design with RGB lighting.",
        image: "https://prd.place/400?id=31",
    },
    {
        id: "4",
        title: "4K Monitor",
        price: "350",
        description: "Ultra HD display with vibrant colors.",
        image: "https://prd.place/400?id=20",
    },
    {
        id: "5",
        title: "Mechanical Keyboard",
        price: "90",
        description: "Tactile feedback with customizable keys.",
        image: "https://prd.place/400?id=10",
    },
    {
        id: "6",
        title: "Bluetooth Speaker",
        price: "70",
        description: "Portable with deep bass and clear sound.",
        image: "https://prd.place/400?id=40",
    },
];

const StorePage = () => {
    return (
        <main className=" relative min-h-screen mt-20 px-4 md:px-12 py-12 bg-pink-300 border-t-4 border-b-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)]">
            {/* Heading */}
            <header
                className="relative mb-12 text-center h-[60vh] flex flex-col items-center justify-center bg-cover  bg-center bg-no-repeat border-black shadow-[6px_6px_0px_rgba(0,0,0,1)]"
                style={{
                    backgroundImage:
                        "url('https://images.pexels.com/photos/1647121/pexels-photo-1647121.jpeg')",
                }}
            >
                {/* Overlay for better contrast */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="relative z-10">
                    <h1 className="text-5xl md:text-6xl font-extrabold uppercase border-4 border-black bg-yellow-200 inline-block px-6 py-3 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                        Our Store
                    </h1>
                    <p className="mt-6 text-lg md:text-xl max-w-xl mx-auto text-white drop-shadow-lg">
                        Fresh drops every week. Bold products, bold style.
                    </p>
                </div>
            </header>

            <ProductFilters />

            {/* Layout with sidebar + content */}
            <section className=" ">
                {/* Products Grid */}
                <div className="">
                    <ProductList products={products} />
                </div>
            </section>
        </main>
    );
};

export default StorePage;
