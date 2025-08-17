import React from "react";
import CoreButton from "../atoms/CoreButton";
import HeroImage from "../molecules/HeroImage";

type Props = {};

const HeroSection = (props: Props) => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-24 border-b-4 border-black bg-gradient-to-r from-yellow-200 to-pink-200">
            {/* Hero Content */}

            <div className="max-w-xl">
                <h1 className="text-4xl md:text-6xl font-extrabold uppercase leading-tight mb-6 tracking-tight">
                    Mall-Quality Apparel <br /> & Everyday Goods
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mb-6">
                    <span className="font-bold underline">LYN STORE</span> —
                    Mall quality you deserve. Prices you’ll love. Style you can
                    trust.
                </p>

                <div className="flex gap-4">
                    <CoreButton className="bg-yellow-300 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] text-black font-bold px-6 py-3 uppercase">
                        Shop Now
                    </CoreButton>
                    <CoreButton className="border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] px-6 py-3 font-bold uppercase bg-white hover:bg-gray-100">
                        Explore
                    </CoreButton>
                </div>
            </div>

            {/* Hero Image */}
            <div className="mt-10 relative  md:mt-0 md:ml-8 w-full md:w-1/2">
                <HeroImage
                    src={
                        "https://images.pexels.com/photos/1647121/pexels-photo-1647121.jpeg"
                    }
                    alt={"hero image"}
                    caption=""
                />{" "}
                <div className="absolute right-0">
                    {" "}
                    <p className="mt-12 text-lg md:text-xl font-bold  border-2 border-black bg-white p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded">
                        Cash on Delivery available for{" "}
                        <span className="uppercase">CDO Downtown</span>{" "}
                        customers only.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
