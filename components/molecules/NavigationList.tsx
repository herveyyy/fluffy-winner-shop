"use client";

import React from "react";
import Link from "next/link";
import { Home, Store, ShoppingCart, User, LogOut } from "lucide-react";
import CoreButton from "../atoms/CoreButton";

type NavItem = {
    href?: string;
    label: string;
    icon: React.ReactNode;
    onClick?: () => void;
};

const navItems: NavItem[] = [
    {
        href: "/",
        label: "Home",
        icon: <Home className="size-4 md:size-5 lg:size-6" />,
    },
    {
        href: "/store",
        label: "Store",
        icon: <Store className="size-4 md:size-5 lg:size-6" />,
    },
    {
        href: "/cart",
        label: "Cart",
        icon: <ShoppingCart className="size-4 md:size-5 lg:size-6" />,
    },
    {
        href: "/profile",
        label: "Profile",
        icon: <User className="size-4 md:size-5 lg:size-6" />,
    },
    {
        label: "Logout",
        icon: <LogOut className="size-4 md:size-5 lg:size-6" />,
        onClick: () => {
            console.log("Logging out...");
            // 🔑 Replace with actual logout logic (e.g., API call or auth signOut)
        },
    },
];

const NavigationList = () => {
    return (
        <ul className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-6 w-full md:w-auto">
            {navItems.map((item) => (
                <li key={item.label} className="w-full md:w-auto">
                    {item.href ? (
                        <CoreButton asChild className="w-full md:w-auto">
                            <Link
                                href={item.href}
                                className="flex items-center justify-center md:justify-start gap-2  hover:text-primary transition w-full"
                            >
                                {item.icon}
                                <span className="text-base md:text-lg lg:text-xl font-bold">
                                    {item.label}
                                </span>
                            </Link>
                        </CoreButton>
                    ) : (
                        <CoreButton
                            onClick={item.onClick}
                            className="w-full md:w-auto flex items-center justify-center md:justify-start gap-2  hover:text-red-600 transition"
                        >
                            {item.icon}
                            <span className="text-base md:text-lg lg:text-xl font-bold">
                                {item.label}
                            </span>
                        </CoreButton>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default NavigationList;
