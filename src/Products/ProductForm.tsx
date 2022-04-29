import React, { useState } from 'react';
import { addProduct, Product } from './products.slice';
import { useAppDispatch } from '../store.hooks';

const ProductForm: React.FC = () => {
    const dispatch = useAppDispatch();

    const [product, setProducts] = useState<Product>({
        id: '',
        title: '',
        price: 0,
    });

    const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
        setProducts(prev => {
            (prev as any)[name] = value;
            const newValue = { ...prev };
            return newValue;
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addProduct(product));
    };

    const { title, price, id } = product || {};

    return (
        <div>
            <h2>Add Game to Store</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Game title" name="title" value={title} onChange={handleChange} />
                <input type="number" placeholder="Price" name="price" value={price} onChange={handleChange} />
                <input type="text" placeholder="id" name="id" value={id} onChange={handleChange} />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default ProductForm;
