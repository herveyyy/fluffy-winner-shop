// app/cart/page.tsx (SSR page)

import CartSection from "@/components/organisms/CartSection";

export default async function CartPage() {
    // Simulate fetching cart data (SSR)
    const cartItems = [
        {
            id: 1,
            name: "Bold Hoodie",
            price: 59,
            qty: 2,
            image: "https://prd.place/400?id=3",
        },
        {
            id: 2,
            name: "Chunky Sneakers",
            price: 120,
            qty: 1,
            image: "https://prd.place/400?id=31",
        },
    ];

    return (
        <main className="min-h-screen  bg-yellow-100 px-6 py-12">
            <div className="mt-10">
                <CartSection items={cartItems} />
            </div>
        </main>
    );
}
