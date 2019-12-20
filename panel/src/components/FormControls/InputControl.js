import React, { memo } from 'react';
import classnames from 'classnames';
import { wordifyfa } from '../../../utils/string'

const InputComponent = memo(function InputControl({ label, input, className, showWords, containerClassName, showCurrency, inputType = "input", meta: { touched, error }, unit, ...rest }) {
    
    return <div className={classnames(containerClassName, "form-group")}>
        <label>{label}</label>
        {React.createElement(inputType, {
            ...input, ...rest, style: { border: error && touched ? '1px solid red' : null },
            className: classnames(className, "border p-1 w-full bg-gray-200 rounded block", { ltr: input.type === 'number' }),
        })}
        {input.type === 'number' && showWords && <span className="block">{wordifyfa(input.value || 0)} {unit}</span>}
        {touched && error && <span style={{ color: 'red', fontSize: 12 }}>{error}</span>}
    </div>
})

export default InputComponent;