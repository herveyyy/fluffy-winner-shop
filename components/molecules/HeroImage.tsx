// components/molecules/HeroImage.tsx
import React from "react";
import ImageAtom from "../atoms/ImageAtom";

interface HeroImageProps {
    src: string;
    alt: string;
    caption?: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, caption }) => {
    return (
        <div className="w-full h-96 bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] flex items-center justify-center relative">
            <ImageAtom
                src={src}
                alt={alt}
                width={400}
                height={300}
                className="object-cover w-full h-full"
            />
            {caption && (
                <span className="absolute bottom-4 left-4 bg-yellow-300 border-2 border-black px-3 py-1 text-sm font-bold uppercase shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                    {caption}
                </span>
            )}
        </div>
    );
};

export default HeroImage;
