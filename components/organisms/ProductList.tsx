import ProductCard, { ProductCardProps } from "../molecules/ProductCard";

type Props = {
    products: ProductCardProps[];
};

const ProductList = ({ products }: Props) => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  border-black">
            {products.map((product, index) => (
                <ProductCard key={product.id || index} {...product} />
            ))}
        </section>
    );
};

export default ProductList;
