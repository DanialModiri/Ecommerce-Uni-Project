import React from 'react';
import { wordifyRialsInTomans } from '../../../utils/string'

function CurrencyControl({ input, label, showWords, className, meta: { error, touched } }) {
    const v = input.value || 0;
    return <div className={className}>
        <label>{label}</label>
        <div className="flex">
            <input autoComplete='off' className="border p-1 rounded bg-gray-200 ltr"
                {...input}
                onChange={(e) => {
                    const v = e.target.value.split(',').join('');
                    if (v && isNaN(v))
                        return;
                    input.onChange(parseInt(v || 0));
                }}
                value={(v).toLocaleString()} />
            <span className="mr-1">ریال</span>
        </div>
        {showWords && <small className="block">{wordifyRialsInTomans(v) }</small>}
        {touched && error && <small style={{ color: 'red' }}>{error}</small>}
    </div>
}

export default CurrencyControl;