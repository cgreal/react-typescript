import React, { useState } from 'react';
import { addProductAsync, getErrorMessage, Product } from './products.slice';
import { useAppDispatch } from '../store.hooks';
import { useSelector } from 'react-redux';

const ProductForm: React.FC = () => {
    const dispatch = useAppDispatch();

    const errorMessage = useSelector(getErrorMessage);

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
        dispatch(addProductAsync(product));
    };

    const { title, price, id } = product || {};

    return (
        <div>
            <h2>Add Game to Store</h2>
            {errorMessage && <span>error:{errorMessage}</span>}
            <form onSubmit={handleSubmit}>
                <input
                    style={{ border: errorMessage ? '1px solid red' : '1px solid black' }}
                    type="text"
                    placeholder="Game title"
                    name="title"
                    value={title}
                    onChange={handleChange}
                />
                <input
                    style={{ border: errorMessage ? '1px solid red' : '1px solid black' }}
                    type="number"
                    placeholder="Price"
                    name="price"
                    value={price}
                    onChange={handleChange}
                />
                <input
                    style={{ border: errorMessage ? '1px solid red' : '1px solid black' }}
                    type="text"
                    placeholder="id"
                    name="id"
                    value={id}
                    onChange={handleChange}
                />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default ProductForm;
