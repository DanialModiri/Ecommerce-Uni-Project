import React from 'react';
import Checkbox from './Checkbox';
import Button from './Button';
import { Link } from 'react-router-dom';

function Table({ columns, data, editUrl, idField, selections = [], removeRestApi, onSelect, before, after }) {
    return <div >
        {before}
        <table className="w-full shadow-lg mt-12 rounded-lg">
            <thead>
                <tr>
                    <th className="p-4">
                        <Checkbox
                            minus={data.length !== selections.length && selections.length !== 0}
                            checked={data.length === selections.length}
                            onChange={() => {
                                if (selections.length >= data.length)
                                    return onSelect([]);
                                onSelect(data.filter(item => item[idField]));
                            }} />
                    </th>
                    {columns.map((item, index) =>
                        <th key={index}>{item.label}</th>
                    )}
                    {(removeRestApi || editUrl) && <th>
                        عملیات
                </th>}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => <tr key={index}>
                    <td className="p-4">
                        <Checkbox checked={selections.includes(row[idField])} onChange={() => {
                            if (!selections.includes(row[idField]))
                                onSelect(selections.concat(row[idField]));
                            else {
                                onSelect(selections.filter(item => item !== row[idField]));
                            }
                        }} />
                    </td>
                    {columns.map((item, colIndex) => {
                        const value = eval(`row.${item.path}`);
                        return <td key={colIndex}>
                            {item.render ? item.render(value) : value}
                        </td>
                    })}
                    <td className="flex justify-center items-center">
                        <button className="border p-2 h-12 w-12 line-12" style={{ borderRadius: '50%' }}>
                            <span className="fa fa-trash block m-auto text-center" />
                        </button>
                        {editUrl && <Link to={`${editUrl}${row[idField]}`} className="  mr-2" >
                            <button className="border block p-2 h-12 w-12 rounded-full line-12 bg-blue-500">
                                <span className="fa fa-edit block m-auto text-center text-white"></span>
                            </button>
                        </Link>}
                    </td>
                </tr>)}
            </tbody>
        </table>
        {after}
    </div>

}

export default Table;