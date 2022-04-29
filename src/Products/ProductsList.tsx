import React from 'react';
import { useSelector } from 'react-redux';
import { getProductsSelector, Product, removeProduct } from './products.slice';
import { useAppDispatch } from '../store.hooks';
import { addToCart } from '../Cart/cart.slice';

const ProductsList: React.FC = ({}) => {
    const products = useSelector(getProductsSelector);
    const dispatch = useAppDispatch();
    const removeProductStore = (id: string) => {
        dispatch(removeProduct(id));
    };
    const addToCartHandler = (product: Product) => {
        dispatch(addToCart(product));
    };
    return (
        <div>
            <h2>Games List</h2>
            {products.map(product => (
                <div key={product.id}>
                    <span>{`${product.title}:${product.price}`}</span>
                    <button onClick={() => addToCartHandler(product)}>Add To Cart</button>
                    <button onClick={() => removeProductStore(product.id)}>Remove From Store</button>
                </div>
            ))}
        </div>
    );
};

export default ProductsList;
