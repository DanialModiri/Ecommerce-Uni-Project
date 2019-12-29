import React, { Fragment } from 'react';
import Header from './components/Header'
import './App.css'
import Products from './pages/Products';
import { HashRouter, Route } from 'react-router-dom';
import Categories from './pages/Categories';
import ShoppingCart from './components/ShoppingCart';


const routes = [
    { path: '/products/:category', exact: true, component: Products },
    { path: '/shoppingcart', exact: true, component: ShoppingCart },
    { path: '/', exact: true, component: Categories }
];

function App() {
    return <HashRouter>
        <Fragment>
            <Header />
            {routes.map((route, index) => <Route {...route} key={index} />)}
            <div className="footer"></div>
        </Fragment>
    </HashRouter>
}

export default App;