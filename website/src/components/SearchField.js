import React from 'react';
import './SearchField.css'

function SearchField({ label }) {
    return <div className="search-field">
        <span className="fa fa-search"></span>
        <input className="search-input" placeholder="جستوجو در محصولات" />
    </div>
}

export default SearchField;