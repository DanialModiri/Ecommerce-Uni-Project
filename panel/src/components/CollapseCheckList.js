import React, { useState } from 'react';
import classnames from 'classnames';

function CollapseCheckList({ items, className, input, label }) {
    const [values, setValues] = useState(items || []);
    return <div className={classnames(className, "border rounded-lg")}>
        <label className="text-xl">{label}</label>
        <input className="w-full p-2 bg-gray-300 rounded-t-lg" placeholder="جستوجو" onChange={(e) => {
            const newValues = items.filter(item => item.includes(e.target.value));
            setValues(newValues);
        }} />
        <ul className="p-2" style={{ height: 200, overflowY: 'scroll' }}>
            {values.map((item, index) => <li className="flex" key={index}>
                <input type="checkbox" onChange={(e) => {
                    if (e.target.checked)
                        input.onChange((input.value || []).concat(item));
                    else
                        input.onChange((input.value || []).filter(i => i !== item));
                }} />
                <div className="mr-2">
                    {item}
                </div>
            </li>)}
        </ul>
    </div>
}

export default CollapseCheckList;