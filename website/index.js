import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App'
import { Provider } from 'react-redux';
import store from './redux';
import { SET_ALL } from './redux/reducers/shoppingCart';

try{
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    store.dispatch({ type: SET_ALL, payload: shoppingCart || {} });
}catch(err){

}


ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));