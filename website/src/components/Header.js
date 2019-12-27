import React from 'react';
import './Header.css'

const navItems = [
    { title: 'خانه', url: '/#' },
    { title: 'محصولات', url: '/#' },
    { title: 'قراردادها', url: '/#' },
    { title: 'خدمات پس از فروش', url: '/#' },
    { title: 'شکایات', url: '/#' },
    { title: '' }
];

function Header() {
    return <header className="header">
        <div className="container">
            <h2 className="website-title">
                وبسایت مدیری
            </h2>
            <ul className="nav-items">
                {navItems.map((item, index) => <li key={index}>
                    {item.title}
                    <span className="underline"></span>
                </li>)}
            </ul>
            <div className="user-widget">
                <span className="fa fa-user-o"></span>
                <span className="title">ورود به حساب کاربری</span>
            </div>
            <div className="shopping-card">
            <i className="fa fa-shopping-cart"></i>
            </div>
        </div>
    </header>
}

export default Header;