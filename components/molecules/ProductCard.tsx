import React from "react";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";

export type ProductCardProps = {
    id?: string;
    image: string;
    title: string;
    description: string;
    price: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
    image,
    title,
    description,
    price,
}) => {
    return (
        <Card
            className="flex flex-col border-[1.5px] border-black 
                rounded-none bg-white 
                hover:bg-yellow-100 
                transition-colors duration-150"
        >
            {/* Image */}
            <CardHeader className="p-0 -translate-y-6 relative">
                <Image
                    width={500}
                    height={1000}
                    src={image}
                    alt={title}
                    className="w-full h-64 object-cover border-b-2 border-black"
                />
                <span className="absolute top-2 right-2 bg-yellow-300 border-2 border-black text-xl px-2 py-0.5  font-bold shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                    ₱{price}
                </span>
            </CardHeader>

            {/* Content */}
            <CardContent className="flex-1 p-3">
                <CardTitle className="text-base font-extrabold">
                    {title}
                </CardTitle>
                <p className="text-xs text-gray-700 mt-1">{description}</p>
            </CardContent>

            {/* Button */}
            <CardFooter className="flex  gap-2 p-3">
                <Button
                    className="w-full font-bold uppercase bg-pink-400 text-black border-2 border-black 
                          rounded-none shadow-[2px_2px_0px_rgba(0,0,0,1)] 
                          hover:bg-pink-500"
                >
                    <FaShoppingCart />
                    Add to Cart
                </Button>
                <Button
                    className=" font-bold uppercase bg-green-400 text-black border-2 border-black 
                          rounded-none shadow-[2px_2px_0px_rgba(0,0,0,1)] 
                          hover:bg-green-500"
                >
                    <FaShoppingBag />
                    <span className="hidden md:block">Buy</span>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
