import {createStore} from 'redux';

import {createReducer} from './utils';
import {ADD_ID} from './actionTypes';

const initialState = {
    ids: [1,2,3],
};

const rootReducer = createReducer({
    [ADD_ID]: (state, {payload}) => ({
        ...state,
        ids: [...state.ids, payload],
    }),
}, initialState);

const store = createStore(rootReducer);

export default store;
