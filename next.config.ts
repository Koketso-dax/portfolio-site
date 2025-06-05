import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                port: "",
                pathname: "/u/**",
            },
            {
                protocol: "https",
                hostname: "github.com",
                port: "",
                pathname: "/Koketso-dax/**",
            }
        ],
    },
};

export default nextConfig;
