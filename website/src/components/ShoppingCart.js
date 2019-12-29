import React from 'react';
import { renderNumber } from './Product';
import { connect } from 'react-redux';
import './ShoppingCart.css'

const columns = [
    { path: 'name', label: 'نام', },
    { path: 'price', label: 'قیمت', render: v => v && renderNumber(v) },
    { path: 'number', label: 'تعداد' },
];

function ShoppingCart({ shoppingCart }) {
    console.log(shoppingCart)
    return <div className="container">
        <table className="table">
            <thead>
                <tr>{columns.map((item, index) => <th key={index} style={{ width: '30%' }}>{item.label}</th>)}</tr>
            </thead>
            <tbody>
                {Object.keys(shoppingCart).map((shoppingCartKey, index) => <tr key={index}>
                    {columns.map(item => <td style={{ textAlign: 'center' }}>
                        {item.render ? item.render(shoppingCart[shoppingCartKey][item.path]) : shoppingCart[shoppingCartKey][item.path]}
                    </td>)}
                </tr>)}
            </tbody>
        </table>
    </div>
}

export default connect(state => state)(ShoppingCart);