import React from 'react';
import { renderNumber } from '../../utils/string';

function Product({ name, primaryImage, price }) {
    return <div className="shadow p-2 m-2 w-3/12">
        <img alt={name} src={primaryImage} className="w-48 object-cover m-auto mb-4" />
        <h2 className="text-gray-800">{name}</h2>
        <p>قیمت : {renderNumber(price)} ریال</p>
    </div>
}

export default Product;