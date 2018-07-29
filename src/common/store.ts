import {createStore, applyMiddleware} from 'redux';
import {connectRouter, routerMiddleware as createRouterMiddleware} from 'connected-react-router';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import history from './history';

const routerMiddleware = createRouterMiddleware(history);

const store = createStore(
    connectRouter(history)(rootReducer),
    composeWithDevTools(applyMiddleware(routerMiddleware)),
);

export default store;
