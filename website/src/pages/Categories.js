import React from 'react';
import DataGetter from '../components/DataGetter';
import { ThreeDots } from 'svg-loaders-react';
import './Categories.css';
import { Link } from 'react-router-dom';

function Categories({ }) {
    console.log('HELLo')
    return <div className="container">
        <DataGetter url='http://localhost:3000/categories'>
            {({ data, loading, error }) => {
                if (loading)
                    return <ThreeDots fillOpacity=".125" fill="currentColor" viewBox="0 0 120 30" className="w-12 h-auto absolute" style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        position: 'absolute'
                    }} />
                return <div className="category-list">
                    {data.map(item => <Link key={item._id} className="category-card-link" to={`/products/${item._id}`}>
                        <div className="category-card">
                            {item.name}
                        </div>
                    </Link>)}
                </div>
            }}
        </DataGetter>
    </div>
}

export default Categories;