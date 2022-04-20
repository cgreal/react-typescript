import React, { useState } from 'react';

const initialProducts = [
    { title: 'Escape from tarkov', price: 60, id: 'eft' },
    { title: 'Hunt: Showdown', price: 70, id: 'hunt' },
    { title: 'Hell Let Loose', price: 55, id: 'h11' },
];

const ProductsList: React.FC<ProductListProps> = () => {
    const [products, setProducts] = useState<Product[]>(initialProducts);
    return (
        <div>
            <h2>Games List</h2>
            {products.map((product: { id: React.Key | null | undefined; title: any; price: any }) => (
                <div key={product.id}>
                    <span>{`${product.title}:${product.price}`}</span>
                </div>
            ))}
            <button
                onClick={() =>
                    setProducts((prevProducts: any) => [
                        {
                            title: 'Half Life',
                            price: '100',
                            id: 'h1',
                        },
                        ...prevProducts,
                    ])
                }
            >
                Add Product
            </button>
        </div>
    );
};

export default ProductsList;
