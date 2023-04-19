import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import HouseList from './components/HouseList';
import Between from './components/Between';

export default function App() {
    return (
        <>
            <Header />
            <ProductList />
            <Between />
            <HouseList />
            <Footer />
        </>
    )
};
