import React from "react";
import CoreButton from "../atoms/CoreButton";
import Link from "next/link";

type Props = {};

const ContactUs = (props: Props) => {
    return (
        <section className="px-6 md:px-12 py-24 flex flex-col items-center justify-center text-center bg-blue-200 border-t-4 border-black">
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-6">
                Contact Us
            </h2>
            <p className="text-lg md:text-xl max-w-xl mb-6">
                Got questions? We’re here to help. Message us directly on
                Facebook for the fastest response.
            </p>
            <CoreButton
                color="blue"
                size="2xl"
                className="text-xl font-bold "
                asChild
            >
                <Link
                    href="https://www.facebook.com/lyn.cabig.mapano" // replace with your actual page link
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Message Us on Facebook
                </Link>
            </CoreButton>
        </section>
    );
};

export default ContactUs;
