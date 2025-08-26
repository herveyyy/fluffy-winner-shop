"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
            // 🔑 Replace with actual logout logic (API call, signOut, etc.)
        },
    },
];

const NavigationList = () => {
    const pathname = usePathname();

    return (
        <ul className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-6 w-full md:w-auto">
            {navItems.map((item) => {
                const isActive =
                    item.href &&
                    (pathname === item.href ||
                        (item.href !== "/" && pathname.startsWith(item.href)));

                return (
                    <li key={item.label} className="w-full md:w-auto">
                        {item.href ? (
                            <CoreButton
                                asChild
                                className={`w-full md:w-auto transition
                                    ${
                                        isActive
                                            ? "bg-yellow-300 border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)]"
                                            : "bg-white border-2 border-black hover:bg-yellow-100"
                                    }`}
                            >
                                <Link
                                    href={item.href}
                                    className="flex items-center justify-center md:justify-start gap-2"
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
                                className="w-full md:w-auto flex items-center justify-center md:justify-start gap-2 border-2 border-black bg-red-200 hover:bg-red-300"
                            >
                                {item.icon}
                                <span className="text-base md:text-lg lg:text-xl font-bold">
                                    {item.label}
                                </span>
                            </CoreButton>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default NavigationList;
