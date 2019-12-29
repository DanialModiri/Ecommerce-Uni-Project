import React from 'react';
import classnames from 'classnames';

function Checkbox({ checked = false, onChange, minus=false, className, }) {
    return <div onClick={() => {
        onChange(!checked);
    }} className={classnames(className, "border text-center h-8 w-8 ", { 'bg-blue-500': checked })}
        style={{ lineHeight: '2rem' }}
    >
        <span className={classnames("fa fa-check text-center m-auto", { 'text-gray-400': !checked, }, 'text-white')}></span>
    </div>
}

export default Checkbox;