import React from 'react';
import './Header.css'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const navItems = [
    { title: 'خانه', url: '/' },
    { title: 'محصولات', url: '/' },
];

function Header({ shoppingCart }) {
    return <header className="header">
        <div className="container">
            <h2 className="website-title">
                وبسایت مدیری
            </h2>
            <ul className="nav-items">
                {navItems.map((item, index) => <li key={index}>
                    <Link to={item.url}>
                        {item.title}
                        <span className="underline"></span>
                    </Link>
                </li>)}
            </ul>
            <div className="user-widget">
                <span className="fa fa-user-o"></span>
                <span className="title">ورود به حساب کاربری</span>
            </div>
            <Link to="/shoppingCart" className="shopping-card">
                <i className="fa fa-shopping-cart"></i>
            </Link>
            <span className="number">
                {Object.keys(shoppingCart).length}
            </span>
        </div>
    </header>
}

export default connect(state => state)(Header);