export const url = 'http://localhost:3000';

const firstEndpoints = {
    categories: {
        post: '/categories',
        get: '/categories',
        search: '/categories/search/'// q
    },
    products: {
        post: '/products',
        get: '/products',// /:id
    }
};

export const builder = (path) => {
    return url + path;
}

function parseREndpoints(obj, field) {
    if (!field) {
        for (let v of Object.keys(obj))
            parseREndpoints(obj, v);
    }
    else if (typeof obj[field] === 'object') {
        for (let v of Object.keys(obj[field]))
            parseREndpoints(obj[field], v);
    }
    else {
        obj[field] = builder(obj[field]);
    }
}

parseREndpoints(firstEndpoints);

export const endpoints = firstEndpoints

