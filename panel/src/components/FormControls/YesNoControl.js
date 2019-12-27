import React from 'react';
import classnames from 'classnames';

function YesNo({ input, label, description, yesLabel = 'بله', noLabel = 'خیر' }) {
    return <div className="p-2">
        <label>{label}</label>
        <input type="checkbox" className="hidden" onChange={(e) => {
            input.onChange(e.target.checked);
        }} />
        <div 
        onClick={() => {
            input.onChange(!input.value);
        }}
        className="border rounded flex w-32 cursor-pointer">
            <span className={classnames("w-1/2 text-center block", { 'bg-red-400': input.value === false })}>{noLabel}</span>
            <span className={classnames("w-1/2 text-center block", { 'bg-green-400': input.value === true })}>{yesLabel}</span>
        </div>
    {description && <span className="text-gray-600">{description}</span>}
    </div>
}

export default YesNo;