import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import history from './history';

import temp from 'temp/reducer';

const rootReducer = combineReducers({
    temp,
    router: connectRouter(history),
});

export default rootReducer;
