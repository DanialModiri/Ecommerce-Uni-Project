import React from 'react';
import './Products.css'
import DataGetter from '../components/DataGetter';
import Product from '../components/Product';
import SearchField from '../components/SearchField'

function Products() {
    return <div>
        <div className="search-bar">
            <div className="container">
                <SearchField />
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