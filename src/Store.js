import { Platform } from 'react-native';
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import devTools from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import getRootReducer from './Reducers';

const middleware = applyMiddleware(promise, thunk);

export default function getStore(navReducer) {
    const store = createStore(
        getRootReducer(navReducer),
        compose(
            middleware,
            devTools(),
        )
    );

    return store;
}
