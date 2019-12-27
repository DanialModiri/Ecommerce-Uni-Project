import Axios from 'axios';

const simpleMemoize = fn => {
    let lastArg;
    let lastResult;
    return arg => {
        if (arg !== lastArg) {
            lastArg = arg;
            lastResult = fn(arg);
        }
        return lastResult;
    };
};



export const isAvaible = ({ url, defaultText, nameField = 'name', message }) => {
    return simpleMemoize(async value => {
        if(defaultText && defaultText === value)
            return undefined;
        const products = await Axios.get(url, { params: { [nameField]: value } }).then(res => res.data);
        if (products.length) {
            return message;
        }
        return undefined;
    })
};