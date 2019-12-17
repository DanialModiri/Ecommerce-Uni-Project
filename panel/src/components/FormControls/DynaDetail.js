import React from 'react';
import { FieldArray } from 'react-final-form-arrays';
import { Field } from 'react-final-form';

function DynaDetail({ columns, name, label }) {
    return <FieldArray name={name}>
        {({ fields }) => <div className="form-group">
            <label>{label}</label>
            <table className="table table-hover">
                <thead>
                    <tr>
                        {columns.map((item, index) => <td key={index}>{item.label}</td>)}
                        <td>
                            <button type="button" className="btn btn-primary" onClick={() => {
                                const newField = columns.reduce((total, item) => ({ ...total, [item.name]: '' }), {})
                                fields.push(newField);
                            }}>
                                <span className="fa fa-plus" />
                            </button>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {fields.map((field, index) => <tr key={index}>
                        {columns.map((column, index) => {
                            const { name, component, label, ...rest } = column;
                            return <td key={index}>
                                <Field component={component} {...rest} name={`${field}.${column.name}`} />
                            </td>
                        })}
                        <td style={{ verticalAlign: 'inherit' }}>
                            <button className="btn btn-danger" style={{ margin: 'auto' }} onClick={() => {
                                fields.remove(index);
                            }}>
                                <span className="fa fa-trash"></span>
                            </button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>}
    </FieldArray>

}

export default DynaDetail;