import React from "react";
import Image from "next/image";
import ImageAtom from "./ImageAtom";

type Props = {
    i: number;
    item: {
        title: string;
        desc: string;
        imageUrl: string; // Add this to provide the image source
    };
};

const FeaturedCard = (props: Props) => {
    const { i, item } = props;
    return (
        <div
            key={i}
            className="bg-white border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] p-8 flex flex-col items-center text-center hover:translate-y-1 transition"
        >
            <div className="w-full h-64 relative mb-6">
                <ImageAtom
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover border-2 border-black"
                />
            </div>
            <h3 className="text-2xl font-extrabold uppercase mb-2">
                {item.title}
            </h3>
            <p className="text-base">{item.desc}</p>
        </div>
    );
};

export default FeaturedCard;
