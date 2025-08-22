"use client";

import { useState } from "react";
import NavigationList from "../molecules/NavigationList";
import { Menu, ShoppingCart, X, User } from "lucide-react";
import CoreButton from "../atoms/CoreButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    user: boolean;
};

export default function Navigation({ user }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav
            className={`${
                pathname === "/login" ? "hidden" : ""
            } fixed top-0 left-0 right-0 z-50 w-full border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] bg-white`}
        >
            <div className="flex items-center justify-between px-6 py-3">
                {/* Logo */}
                <div className="text-2xl font-extrabold uppercase tracking-wider bg-yellow-300 px-3 py-1 border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                    Lyn Store
                </div>

                {/* Right side controls */}
                <div className="flex gap-2 items-center">
                    {/* If user is logged in → show Cart */}
                    {user && (
                        <CoreButton className="md:hidden border-2">
                            <ShoppingCart className="size-4 md:size-5 lg:size-6" />
                        </CoreButton>
                    )}

                    {/* Auth button (mobile only) */}
                    {!user ? (
                        <Link href={"/login"} className="cursor-pointer">
                            <CoreButton className="md:hidden border-2 bg-green-300 px-2 py-1">
                                Login
                            </CoreButton>
                        </Link>
                    ) : (
                        <CoreButton className="md:hidden border-2 bg-purple-300 px-2 py-1">
                            <User className="size-4" />
                        </CoreButton>
                    )}

                    {/* Menu toggle (only if logged in) */}
                    {user && (
                        <CoreButton
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden border-2 border-black bg-pink-300 p-2 shadow-[3px_3px_0px_rgba(0,0,0,1)]"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </CoreButton>
                    )}
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4">
                    {user ? (
                        <>
                            <NavigationList />

                            <CoreButton className="border-2 border-black px-4 py-2">
                                <ShoppingCart className="size-5" />
                            </CoreButton>
                        </>
                    ) : (
                        <Link href={"/login"} className="cursor-pointer">
                            <CoreButton className="border-2 border-black bg-green-300 px-4 py-2 font-bold">
                                Login
                            </CoreButton>
                        </Link>
                    )}
                </div>
            </div>

            {/* Mobile Nav (only for logged-in users) */}
            {isOpen && user && (
                <div className="flex flex-col items-center p-2 px-4 border-t-4 border-black bg-blue-200 md:hidden">
                    <NavigationList />
                </div>
            )}
        </nav>
    );
}
