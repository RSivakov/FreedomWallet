import { combineReducers } from 'redux';
import CryptoReducer from './CryptoReducer';

export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        crypto: CryptoReducer
    });
}
