import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CreateProduct from '../pages/CreateProduct';
import Products from '../pages/Products';
import CreateCategory from '../pages/Category/CreateCategory';

export const routes = {
    createCategory: { path: '/create/category', component: CreateCategory },
    createProduct: { path: '/create/products', component: CreateProduct },
    products: { path: '/', component: Products },
};

const navs = [
    {
        label: 'محصولات',

        children: [
            { label: 'محصول جدید', link: routes.createProduct.path },
            { label: 'دسته جدید', link: routes.createCategory.path },
            { label: 'مشاهده محصولات', link: routes.products.path }
        ]
    }
]

function NavItem({ label, children }) {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    }
    const height = children.length * 31;
    return <li className="mt-4">
        <div className="flex" onClick={toggle}>
            <label className="flex-grow mr-2 cursor-pointer">
                {label}
            </label>
            <span style={{ transition: '0.5s linear' ,transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }} className="fa fa-sort-down block ml-2 cursor-pointer" onClick={toggle}></span>
        </div>
        <ul style={{ transition: '.5s linear', height: open ? height : 0, overflow: 'hidden' }} className="bg-gray-200 m-0 p-0">
            {children.map((item, index) => <li className="hover:bg-gray-300 m-0 py-1 p-0" key={index}>
                <Link className="w-full block " to={item.link}>
                    {item.label}
                </Link>
            </li>)}
        </ul>
    </li>
}

function Layout({ children }) {
    return <div className="layout">
        <div className="flex">
            <ul className="w-64 h-screen fixed shadow-lg">
                {navs.map((item, index) => <NavItem {...item} key={index} />)}
            </ul>
            <div className="mr-64 w-full">
                {children}
            </div>
        </div>

    </div>
}

export default Layout;