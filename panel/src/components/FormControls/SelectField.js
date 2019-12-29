import React from 'react';
import Downshift from 'downshift';
import classnames from 'classnames'
import './SelectField.css'
import { ThreeDots } from 'svg-loaders-react';
import DataGetter from '../DataGetter'

function SelectField(props) {
    const { items, input, label, initialSelectedItem, url, search, searchKey = 'q', idField='_id', labelField = 'label', placeholder, onChange, inputClassName, meta: { error, touched }, className, ...rest } = props;
    return <Downshift
        onSelect={() => {
            input && input.onBlur();
        }}
        initialSelectedItem={initialSelectedItem}
        onChange={(v) => {
            input && input.onChange(v[idField], v);
            onChange && onChange(v[idField], v);
        }}
        itemToString={(item) => item ? item[labelField] : ''}
        {...rest} >
        {({ getItemProps,
            getInputProps,
            getToggleButtonProps,
            highlightedIndex,
            openMenu,
            selectedItem,
            inputValue,
            isOpen }) => <div className={classnames(className, 'relative')}>
                <label>
                    {label}
                </label>
                {url ? <input  onBlur={() => {
                    input.onBlur()
                }} className="bg-gray-200 rounded w-full p-1" {...getInputProps()} /> :
                    <div onClick={() => {
                        openMenu()
                    }} className={classnames(inputClassName, 'bg-gray-200 rounded w-full p-1 flex', { "border-red-700": error && touched })}>
                        <div className="flex-grow my-auto">{selectedItem ? selectedItem.label : placeholder}</div>
                        <button className="block my-auto" {...getToggleButtonProps()} onClick={() => {
                            openMenu();
                        }} style={{
                            backgroundColor: 'transparent',
                            color: '#555'
                        }} type="button">
                            <span className="fa fa-sort-down " />
                        </button>
                    </div>}
                {touched && error && <span style={{ fontSize: 12, color: 'red' }} className="text-red-700 text-sm">{error}</span>}
                {isOpen && <div className={classnames("left-0 absolute rounded w-full border bg-white", { 'border-red-700':error && touched })}
                    style={{ transition: '.5s linear', minHeight: 50, left: '0', overflow: 'auto', zIndex: 1 }}>
                    {(search ? <DataGetter url={url} params={{ [searchKey]: inputValue }}>
                        {({ data, loading, error }) => {
                            if (loading)
                                return <ThreeDots style={{
                                    left: '50%',
                                    top: '50%',
                                    transform: 'translate(-50%, -50%)'
                                }} fillOpacity=".125" fill="currentColor" viewBox="0 0 120 30" className="w-12 h-auto absolute" />
                            if (!loading && !data)
                                return <span className="text-red-400">خطایی رخ داده است</span>;
                            return <ul>
                                {data.map((item, index) => <li key={index}
                                    className={classnames('p-2 bg-white', {
                                        'bg-blue-600 text-white': selectedItem && selectedItem.id === item.id,
                                        'bg-gray-200': index === highlightedIndex
                                    })}
                                    {...getItemProps({ index, item: item })}>
                                    {item[labelField]}
                                </li>)}
                            </ul>
                        }}
                    </DataGetter> : <ul>
                            {(items || []).map((item, index) => <li key={index}
                                className={classnames('p-2 bg-white', {
                                    'bg-blue-600 text-white': selectedItem && selectedItem.id === item.id,
                                    'bg-gray-200': index === highlightedIndex
                                })}
                                {...getItemProps({ index, item: item })}>
                                {item[labelField]}
                            </li>)}
                        </ul>)}
                </div>}
            </div>}
    </Downshift>
}

export default SelectField;