import React, { useState } from 'react';
import { toBase64 } from '../../../utils/images';

function MultiImages({ input, label }) {
    const images = input.value || [];
    return <div className="form-group">
        <label>{label}</label>
        <div className="row">
            {images.map(image => <img src={image} style={{ maxHeight: '100px', width: '100px', objectFit: 'cover' }} className="image" />)}
            <div className="col-12">
                <input type="file" onChange={e => {
                    if (!e.target.files[0])
                        return;
                    toBase64(e.target.files[0]).then(res => {
                        const newImages = [...input.value];
                        newImages.push(res);
                        input.onChange(newImages);
                    });

                }} />
            </div>
        </div>
    </div>

}

export default MultiImages;