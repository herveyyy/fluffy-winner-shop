// src/components/atoms/ImageAtom.tsx
"use client";

import Image, { ImageProps } from "next/image";

type ImageAtomProps = ImageProps & {
    rounded?: boolean;
    shadow?: boolean;
    border?: boolean;
};

export default function ImageAtom({
    alt,
    width,
    height,
    rounded = false,
    shadow = false,
    border = false,
    className = "",
    ...props
}: ImageAtomProps) {
    return (
        <Image
            alt={alt}
            width={width}
            height={height}
            className={`
        ${rounded ? "rounded-2xl" : ""}
        ${shadow ? "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : ""}
        ${border ? "border-2 border-black" : ""}
        ${className}
      `}
            {...props}
        />
    );
}
