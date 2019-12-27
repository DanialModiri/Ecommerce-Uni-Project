import React from 'react';
import SelectField from './SelectField';

function ListBuilder({ url, input }){
    return <div>
        <SelectField 
        url={url}
        searchKey={'q'}
        input={{
            onChange: (value, item) => {
                console.log(item)
                input.onChange((input.value || []).concat(value));            
            }
        }} />
        <div className="flex">
            {(input.value || []).map(item => <div className="flex">
                <span>{item.label}</span>
                <span className="fa fa-close border rouned-full h-8 w-8"></span>
            </div>)}
        </div>
    </div>
}

export default ListBuilder;