import React from 'react';

function InputControl({ label, input, inputType = "input", meta: { touched, error }, ...rest }) {
    return <div className="form-group">
        <label>{label}</label>
        {React.createElement(inputType, { ...input, ...rest, style: { border: error && touched ? '1px solid red' : null }, className: "form-control" })}
        {touched && error && <span style={{ color: 'red', fontSize: 12 }}>{error}</span>}
    </div>
}

export default InputControl;