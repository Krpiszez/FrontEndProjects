import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import HouseList from './components/HouseList';
import Between from './components/Between';
import ShoeList from './components/ShoeList';

export default function App() {
    return (
        <>
            <Header />
            <ProductList />
            <Between />
            <HouseList />
            <ShoeList/>
            <Footer />
        </>
    )
};
