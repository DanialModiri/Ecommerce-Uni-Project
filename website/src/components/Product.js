import React from 'react';
import './Product.css'
import Text from './Text';
import { connect } from 'react-redux'
import { SET_PRODUCT } from '../../redux/reducers/shoppingCart';
import classnames from 'classnames';

export const renderNumber = (number) => {
    if (typeof (number * 1) !== 'number')
        return null;
    number = Number(number);
    return Math.round(number) === number ? number.toLocaleString() : number.toFixed(2).toLocaleString();
}

function Product({ _id, image, name, price, shoppingCart, dispatch }) {
    const [hide, setHide] = React.useState(false);
    return <div className="product">
        <div className="product-border">
            <img src={image} />
            <p className="product-title">{<Text maxCharacters={255} text={name} />}</p>
            <p className="product-price">
                {renderNumber(price)} ریال
            </p>


        </div>
        <button className={classnames("add-to-shopping-cart", { 'fade-out': hide })} onClick={() => {
            dispatch({ type: SET_PRODUCT, payload: { price, name, image, _id, number: 1 } });
            setTimeout(() => {setHide(true)}, 1000);
        }}>
            <span className={classnames({ 'fa fa-check': shoppingCart[_id], "fa fa-shopping-cart": !shoppingCart[_id] })}></span>
            {shoppingCart[_id] ? 'افزوده شد' : 'افزودن به سبد خرید'}
        </button>
    </div>
}

export default connect(state => state)(Product);