"use client";

import { useState } from "react";
import Image from "next/image";
import CoreButton from "../atoms/CoreButton";

type CartItem = {
    id: number;
    name: string;
    price: number;
    qty: number;
    image: string;
};

const CartSection = ({ items }: { items: CartItem[] }) => {
    const [cart, setCart] = useState(items);

    const updateQty = (id: number, delta: number) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, qty: Math.max(1, item.qty + delta) }
                    : item
            )
        );
    };

    const removeItem = (id: number) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const shipping = subtotal > 0 ? 15 : 0;
    const total = subtotal + shipping;

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-4xl font-extrabold mb-6 border-4 border-black bg-yellow-200 px-4 py-2 inline-block shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                Your Cart
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                    {cart.length === 0 ? (
                        <p className="text-gray-600 italic">
                            Your cart is empty.
                        </p>
                    ) : (
                        cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-4 border-2 border-black p-4 rounded-2xl shadow-[3px_3px_0px_rgba(0,0,0,1)] bg-white"
                            >
                                <div className="relative w-28 h-28 border-2 border-black rounded-xl overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl font-bold">
                                        {item.name}
                                    </h2>
                                    <p className="text-gray-700">
                                        ${item.price.toFixed(2)} × {item.qty}
                                    </p>
                                    <p className="font-bold">
                                        ${(item.price * item.qty).toFixed(2)}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() =>
                                                updateQty(item.id, -1)
                                            }
                                            className="px-2 py-1 border-2 border-black rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                                        >
                                            -
                                        </button>
                                        <span>{item.qty}</span>
                                        <button
                                            onClick={() =>
                                                updateQty(item.id, 1)
                                            }
                                            className="px-2 py-1 border-2 border-black rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-red-600 hover:underline text-sm font-semibold"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Receipt / Summary */}
                <div className="border-4 border-black p-6 rounded-2xl bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)] h-fit">
                    <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                    <div className="space-y-2 text-lg">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span>${shipping.toFixed(2)}</span>
                        </div>
                        <div className="border-t-2 border-black my-2"></div>
                        <div className="flex justify-between font-extrabold text-xl">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>
                    <CoreButton
                        size={"xl"}
                        className="w-full p-4 mt-6 border-4 border-black bg-green-300 hover:bg-green-400 font-extrabold text-lg"
                    >
                        Checkout
                    </CoreButton>
                </div>
            </div>
        </div>
    );
};

export default CartSection;
