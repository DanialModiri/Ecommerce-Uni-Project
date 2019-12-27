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

export const isAvaible = ({ url, nameField = 'name', message }) => simpleMemoize(async value => {
    if (!value) {
        return "Required";
    }
    const products = await Axios.get(url, { params: { [nameField]: value } }).then(res => res.data);
    if (products.length){
        console.error(products.length);
        return message;
    }
    return undefined;
});