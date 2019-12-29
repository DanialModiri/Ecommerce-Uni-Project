
const INITIAL_STATE = {};

export const SET_PRODUCT = 'SET_PRODUCT';
export const SET_ALL = 'SET_ALL';
export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case SET_ALL:
            return payload;
        case SET_PRODUCT: {
            const number = payload.number || 0;
            const newState =  { ...state, [payload._id]: { number, name: payload.name, image: payload.image, price: payload.price * number } };
            localStorage.setItem('shoppingCart', JSON.stringify(newState));
            return newState;
        }
        default:
            return state
    }
}