import type { Metadata } from "next";
import { Geist, Geist_Mono, Darker_Grotesque } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/organisms/Navigation";

export const metadata: Metadata = {
    title: "Lyn Store",
    description: "Lyn store app",
};
const font = Darker_Grotesque({ subsets: ["latin"] });
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${font.className}  antialiased`}>
                <Navigation user={false} />
                <main className="">{children}</main>
            </body>
        </html>
    );
}
