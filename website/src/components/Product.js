import React from 'react';
import './Product.css'
import Text from './Text';

export const renderNumber = (number) => {
    if(typeof (number * 1) !== 'number')
        return null;
    number = Number(number);
    return Math.round(number) === number ? number.toLocaleString() : number.toFixed(2).toLocaleString();
}

function Product({ image, name, price }) {

    return <div className="product">
        <div className="product-border">
            <img src={image} />
            <p className="product-title">{<Text maxCharacters={255} text={name} />}</p>
            <p className="product-price">
                {renderNumber(price)} ریال
            </p>


        </div>
        <button className="add-to-shopping-cart">
                <span className="fa fa-shopping-cart"></span>
                افزودن به سبد خرید
            </button>
    </div>
}

export default Product;