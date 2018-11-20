import {createStore, applyMiddleware} from 'redux';
import {routerMiddleware as createRouterMiddleware} from 'connected-react-router';
import {composeWithDevTools} from 'redux-devtools-extension';

import history from './history';
import rootReducer from './rootReducer';

const routerMiddleware = createRouterMiddleware(history);

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(routerMiddleware)),
);

export default store;
