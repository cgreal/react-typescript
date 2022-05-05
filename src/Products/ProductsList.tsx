import React from 'react';
import { useSelector } from 'react-redux';
import {
    addProductAsync,
    Product,
    removeProduct,
    selectAllProducts,
    selectProductById,
    selectProductEntities,
    selectProductIds,
    selectTotalProducts,
} from './products.slice';
import { RootState } from '../Stores/products.store';
import { useAppDispatch } from '../store.hooks';
import { addToCart } from '../Cart/cart.slice';

const ProductsList: React.FC = ({}) => {
    const products = useSelector(selectAllProducts);

    /*const eft = useSelector<RootState>(state => selectProductById(state, 'eft'));
    const totalNumberOfProducts = useSelector(selectTotalProducts);
    const productIds = useSelector(selectProductIds);
    const entities = useSelector(selectProductEntities);*/
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
            {products &&
                products.length > 0 &&
                products.map(product => (
                    <div key={product.id}>
                        <span>{`${product.title}:${product.price}`}</span>
                        <button onClick={() => addToCartHandler(product)}>Add To Cart</button>
                        <button onClick={() => removeProductStore(product.id)}>Remove From The Store</button>
                    </div>
                ))}
        </div>
    );
};

export default ProductsList;
