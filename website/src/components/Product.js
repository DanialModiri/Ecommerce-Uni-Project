import React from 'react';
import './Product.css'
import Text from './Text';

function Product({ image, title, }) {

    return <div className="product">
        <div className="product-border">
            <img src={image} />
            <p>{<Text maxCharacters={255} text={title} />}</p>
        </div>
    </div>
}

export default Product;