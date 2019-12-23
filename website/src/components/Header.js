import React from 'react';
import './Header.css'

const navItems = [
    { title: 'خانه', url: '/#' },
    { title: 'محصولات', url: '/#' },
    { title: 'قراردادها', url: '/#' },
    { title: 'خدمات پس از فروش', url: '/#' },
    { title: 'شکایات', url: '/#' }
];

function Header() {
    return <header className="header">
        <div className="container">
            <h2>ساایران</h2>
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
        </div>
    </header>
}

export default Header;