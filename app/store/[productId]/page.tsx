import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { FaCartPlus, FaStore } from "react-icons/fa";
import { FaBasketShopping, FaCartShopping } from "react-icons/fa6";
type Props = {
    params: { productId: string };
};
const ProductProfilePage = (props: Props) => {
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
                    {"Product Title"}
                </h1>
                <p className="text-xl font-bold mb-6">{`Product Price`}</p>
                <p className="text-lg mb-6">
                    Voluptate excepteur fugiat adipisicing anim occaecat
                    voluptate cillum eiusmod Lorem aliquip.
                </p>
                {/* Sizes */}
                {/* <div className="mb-6">
                    <h3 className="font-bold mb-2">Sizes</h3>
                    <div className="flex gap-3">
                        {product.sizes.map((size) => (
                            <button
                                key={size}
                                className="px-4 py-2 border-2 border-black rounded-lg hover:bg-yellow-200"
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div> */}
                {/* Colors */}
                <div className="mb-6">
                    {/* <h3 className="font-bold mb-2">Colors</h3> */}
                    {/* <div className="flex gap-3">
                        {product.colors.map((color) => (
                            <div
                                key={color}
                                className="w-10 h-10 rounded-full border-2 border-black cursor-pointer"
                                style={{ backgroundColor: color.toLowerCase() }}
                            />
                        ))}
                    </div> */}
                </div>{" "}
                <Button
                    color="pink"
                    className="w-full  mt-6 text-lg py-6 font-bold rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,1)]"
                >
                    <FaStore /> <span>Buy</span>
                </Button>
                <Button className="w-full mt-6 text-lg py-6 font-bold rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,1)]">
                    <FaCartShopping /> <span> Add to Cart</span>
                </Button>{" "}
            </div>
        </main>
    );
};

export default ProductProfilePage;
