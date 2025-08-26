import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https", // or "http" if that’s what your source uses
                hostname: "images.pexels.com",
                port: "",
                pathname: "/**", // allow all paths under the domain
            },
            {
                protocol: "https",
                hostname: "via.placeholder.com",
                port: "",
                pathname: "/**",
            },

            {
                protocol: "https",
                hostname: "prd.place",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
