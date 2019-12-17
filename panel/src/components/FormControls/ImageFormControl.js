import React from 'react';
import { toBase64 } from '../../../utils/images';

function ImageControl({ input, label }) {
    return <div className="form-group">
        <label>{label}</label>
        <input className="form-control" type="file" onChange={(e) => {
            const file = e.target.files.length > 0 ? e.target.files[0] : null;
            if (file) {
                toBase64(e.target.files[0]).then(res => {
                    input.onChange(res);
                });
            }
            else {
                input.onChange('');
            }
        }} />
    </div>
}

export default ImageControl;