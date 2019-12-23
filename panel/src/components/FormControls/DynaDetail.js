import React from 'react';
import { FieldArray } from 'react-final-form-arrays';
import { Field } from 'react-final-form';

function DynaDetail({ columns, name, label, validate, className, ...rest }) {
    return <FieldArray {...rest} validate={validate} name={name} >
        {({ fields, meta: { error, touched } }) => {
            return <div className={className}>
                <label>{label}</label>
                <table className={"bg-white rounded-lg shadow w-full p-2 mt-2"}>
                    <thead>
                        <tr>
                            {columns.map((item, index) => <td className="p-2" key={index}>{item.label}</td>)}
                            <td className="p-2">
                                <button type="button" className="border block m-auto rounded-full w-8 h-8 text-center outline-0 bg-blue-600 text-white" onClick={() => {
                                    const newField = columns.reduce((total, item) => ({ ...total, [item.name]: '' }), {})
                                    fields.push(newField);
                                }}>
                                    <span className="fa fa-plus" />
                                </button>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {fields.map((field, index) => <tr className="border" key={index}>
                            {columns.map((column, columnIndex) => {
                                const { name, dyna = false, component, label, ...rest } = column;
                                return <td key={index + '' + columnIndex} className="p-2" style={{ verticalAlign: 'top' }}>
                                    {dyna ? <DynaDetail label={label} {...rest} name={`${field}.${name}`} /> : <Field component={component} {...rest} name={`${field}.${column.name}`} />}
                                </td>
                            })}
                            <td style={{ verticalAlign: 'inherit' }}>
                                <button type="button" className="border rounded-full w-8 h-8 text-center outline-0 bg-red-800 text-white block" style={{ margin: 'auto' }} onClick={() => {
                                    fields.remove(index);
                                }}>
                                    <span className="fa fa-trash"></span>
                                </button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
                {touched && error && <span style={{ color: 'red', fontSize: 12 }}>{typeof error === 'string' ? error : null}</span>}
            </div>
        }

        }

    </FieldArray>

}

export default DynaDetail;