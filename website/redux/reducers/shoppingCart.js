
const INITIAL_STATE = {};

export const SET_PRODUCT = 'SET_PRODUCT';

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case SET_PRODUCT: {
            const number = payload.number || 0;
            return { ...state, [action._id]: { number, price: payload.price * number } }
        }
        default:
            return state
    }
}