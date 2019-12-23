export const url = 'http://localhost:3002';

export const endpoints = {
    categories: {
        post: '/categories',
        get: '/categories'
    },
    products: {
        post: '/products',
        get: '/products',// /:id
    }
};

export const builder = (path) => {
    return url + path;
}
