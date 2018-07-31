import {combineReducers} from 'redux';

import temp from '../temp/reducer';

const rootReducer = combineReducers({
    temp,
});

export default rootReducer;
