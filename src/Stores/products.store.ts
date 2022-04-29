import { configureStore } from '@reduxjs/toolkit';
import products from '../Products/products.slice';
import cart from '../Cart/cart.slice';

const productsStore = configureStore({
    reducer: {
        products,
        cart,
    },
});

export type RootState = ReturnType<typeof productsStore.getState>;
export type AppDispatch = typeof productsStore.dispatch;

export default productsStore;
