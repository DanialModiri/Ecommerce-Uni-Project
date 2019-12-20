import React from 'react';
import { toBase64 } from '../../../utils/images';

function ImageControl({ input, label, className }) {
    return <div className={className}>
        <label>{label}</label>
        <div className="rounded h-32 w-24">
            <img className="h-32 w-24" style={{ objectFit: 'cover' }} src={input.value || 'https://atasouthport.com/wp-content/uploads/2017/04/default-image.jpg'}></img>
        </div>
        <input className="border rounded block mt-2" type="file" onChange={(e) => {
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