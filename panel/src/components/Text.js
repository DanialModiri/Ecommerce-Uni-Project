import React from 'react';

function Text({ text, maxLength = 45 }) {
    return <p title={text}>
        {text.slice(0, maxLength)}{text.length > maxLength && '...'}
    </p>
}

export default Text;