import React, { useState } from 'react';
import './Products.css'
import DataGetter from '../components/DataGetter';
import Product from '../components/Product';
import SearchField from '../components/SearchField'
import { ThreeDots } from 'svg-loaders-react';
import CollapseCheckList from '../components/CollapseCheckList';
import Pagination from 'react-paginate';

function Products(props) {
    const id = props.match.params.category;
    const [query, setQuery] = useState({});
    return <div>
        <div className="search-bar">
            <div className="container">
                <SearchField />
            </div>
        </div>
        <div className="products-container">
            <div className="side">
                <DataGetter url={`http://localhost:3000/categories/${id}`}>
                    {({ data, error, loading }) => {
                        if (loading)
                            return <ThreeDots fillOpacity=".125" fill="currentColor" viewBox="0 0 120 30" className="w-12 h-auto absolute" style={{
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                                position: 'absolute'
                            }} />
                        return <div className="filters">
                            <label>فیلتر</label>
                            {Object.keys(data.filters_values).map(item => <CollapseCheckList value={query[item]} onChange={(v) => {
                                console.log(v)
                                setQuery({ ...query, [item]: v });
                            }} name={item} className="filter-item" label={data.filters_values[item].label} items={data.filters_values[item].list} />)}
                        </div>
                    }}
                </DataGetter>
            </div>
            <DataGetter url={'http://localhost:3000/products'} params={{ category: id, ...query }}>
                {({ data, loading, error }) => {
                    if (loading)
                        return <ThreeDots fillOpacity=".125" fill="currentColor" viewBox="0 0 120 30" className="w-12 h-auto absolute" style={{
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            position: 'absolute'
                        }} />
                    return <div style={{ width: '100%' }}>
                        <div className="products">
                            {data.list.map((product, index) => <Product {...product} key={index} />)}
                        </div>
                        <Pagination
                            pageCount={Math.ceil(data.count / 5)}
                            pageRangeDisplayed={4}
                            containerClassName="pagination"
                            pageLinkClassName="pagination-item-link"
                            pageClassName="pagination-item"
                            activeClassName="bg-blue-800"
                            previousClassName="none"
                            nextClassName="none"
                        />
                    </div>
                }}
            </DataGetter>
        </div>
    </div>
}

export default Products;