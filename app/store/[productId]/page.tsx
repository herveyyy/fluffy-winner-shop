import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaStore } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export default async function Page({
    params,
}: {
    params: Promise<{ productId: string }>;
}) {
    const { productId } = await params;

    return (
        <main className="mt-12 max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative w-full aspect-square border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                <Image
                    width={1000}
                    height={1000}
                    src={"/featured2.jpg"}
                    alt={"SKIBID"}
                    className="object-cover"
                />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-center">
                <h1 className="text-4xl font-extrabold uppercase mb-4">
                    Product ID: {productId}
                </h1>
                <p className="text-xl font-bold mb-6">{`Product Price`}</p>
                <p className="text-lg mb-6">
                    Voluptate excepteur fugiat adipisicing anim occaecat
                    voluptate cillum eiusmod Lorem aliquip.
                </p>
                <div className="mb-6"></div>
                <Button
                    color="pink"
                    className="w-full  mt-6 text-lg py-6 font-bold rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,1)]"
                >
                    <FaStore /> <span>Buy</span>
                </Button>
                <Button className="w-full mt-6 text-lg py-6 font-bold rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,1)]">
                    <FaCartShopping /> <span> Add to Cart</span>
                </Button>
            </div>
        </main>
    );
}
