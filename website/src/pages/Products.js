import React from 'react';
import './Products.css'
import DataGetter from '../components/DataGetter';
import Product from '../components/Product';

function Products() {
    return <div>
        <div className="search-bar">
            <div className="container">
                <div className="search-field">
                    <span className="fa fa-search"></span>
                    <input className="search-input" placeholder="جستوجو در محصولات" />
                </div>
            </div>
        </div>
        <div className="container">
            <DataGetter url={'http://localhost:4000/products'} params={{ _limit: 12 }}>
                {({ data, loading, error }) => {
                    if (loading)
                        return 'wait'
                    return <div className="products">
                        {data.map((product, index) => <Product {...product} key={index} />)}
                    </div>
                }}
            </DataGetter>
        </div>
    </div>
}

export default Products;