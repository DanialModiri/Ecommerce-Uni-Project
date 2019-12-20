import React, { useState } from 'react';
import { toBase64 } from '../../../utils/images';

function MultiImages({ input, label, className }) {
    const images = input.value || [];
    return <div className={className}>
        <label>{label}</label>
        <div className="flex h-32 border rounded w-full" style={{ overflow: 'auto' }}>
            {images.map(image => <div className="border p-2 ml-2">
                <img src={image} className="w-32" style={{ maxHeight: '100px', width: '100px', objectFit: 'cover' }} className="image" />
            </div>)}
        </div>
        <input className="mt-2 border rounded" type="file" onChange={e => {
            if (!e.target.files[0])
                return;
            toBase64(e.target.files[0]).then(res => {
                const newImages = [...input.value];
                newImages.push(res);
                input.onChange(newImages);
            });

        }} />
    </div>

}

export default MultiImages;