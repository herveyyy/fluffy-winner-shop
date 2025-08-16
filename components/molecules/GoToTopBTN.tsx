"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import CoreButton from "../atoms/CoreButton";

export default function GoToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when user scrolls down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        isVisible && (
            <CoreButton
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
            >
                <ArrowUp className="w-6 h-6 text-black" />
            </CoreButton>
        )
    );
}
