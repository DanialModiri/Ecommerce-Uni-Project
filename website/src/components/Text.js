import React from 'react';

function Text({ text, className, maxCharacters }){
    text = text || '';
    return <span className={className}>
        {text.slice(0, maxCharacters)}{text.length > maxCharacters && '...'}
    </span>
}

export default Text;