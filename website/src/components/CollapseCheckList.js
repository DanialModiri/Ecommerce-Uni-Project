import React, { useState } from 'react';
import './CollapseCheckList.css';
import CheckBox from './Checkbox';
import classnames from 'classnames';

function CollapseCheckList({ items, className, name, label, render, value=[], onChange }) {
    return <div className={classnames(className, "collapse")}>
        <label>{label}</label>
        <input className="search-input" placeholder="جستوجو...." />
        {items.map((item, index) => <div key={index} className="item">
            <CheckBox onChange={(v) => {
                if(v)
                    onChange(value.concat(item));
                else
                    onChange(value.filter(v => v !== item));
            }} /> <span className="text">{item}</span>
        </div>)}
    </div>
}

export default CollapseCheckList;