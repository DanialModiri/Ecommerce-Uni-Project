import React from 'react';
import classnames from 'classnames';

function Button({ tag = 'button', icon, className, children, ...rest }) {
    return React.createElement(tag, {
        className: classnames(className, 'bg-blue-500 border rounded p-2'),
        ...rest,
        chidlren: <div className="flex">
            <div>
                {icon}
            </div>
            <div className="mr-1">
                {children}
            </div>
        </div>
    })
}

export default Button;