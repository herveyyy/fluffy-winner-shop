import React from "react";
import FeaturedCard from "../atoms/FeaturedCard";

type FeaturedItem = {
    title: string;
    desc: string;
};

type Props = {
    items: FeaturedItem[];
};

const FeaturedList: React.FC<Props> = ({ items }) => {
    return (
        <section className="px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-3 gap-10 border-b-4 border-black">
            {items.map((item, i) => (
                <FeaturedCard
                    key={i}
                    i={i}
                    item={{
                        title: item.title,
                        desc: item.desc,
                    }}
                />
            ))}
        </section>
    );
};

export default FeaturedList;
