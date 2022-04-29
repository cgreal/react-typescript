import React from 'react';
import './App.scss';
import ProductsList from './Products/ProductsList';
import ProductForm from './Products/ProductForm';
import { Provider } from 'react-redux';
import ProductsStore from './Stores/products.store';
import Cart from './Cart/Cart';

const App = () => {
    return (
        <Provider store={ProductsStore}>
            <div className="App">
                <div>main screen</div>
                <ProductsList />
                <ProductForm />
                <Cart />
            </div>
        </Provider>
    );
};

export default App;
