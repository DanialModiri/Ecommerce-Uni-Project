import React from 'react';
import './ChcekBox.css';

function CheckBox({ onChange }) {
    return <label className="checkbox-container">
        <input type="checkbox" onChange={(e) => {
            onChange(e.target.checked);
        }}/>
        <span className="fa fa-check"></span>
    </label>
}

export default CheckBox;