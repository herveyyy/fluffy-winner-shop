import React from "react";

type Props = {
    i: number;
    item: {
        title: string;
        desc: string;
    };
};

const FeaturedCard = (props: Props) => {
    const { i, item } = props;
    return (
        <div
            key={i}
            className="bg-white border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] p-8 flex flex-col items-center text-center hover:translate-y-1 transition"
        >
            <div className="w-full h-48 bg-gray-100 border-2 border-black mb-6 flex items-center justify-center">
                <span className="font-bold uppercase text-gray-500">
                    {item.title} Img
                </span>
            </div>
            <h3 className="text-2xl font-extrabold uppercase mb-2">
                {item.title}
            </h3>
            <p className="text-base">{item.desc}</p>
        </div>
    );
};

export default FeaturedCard;
