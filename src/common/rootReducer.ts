import {createReducer} from './utils';
import {ADD_ID} from './actionTypes';

const initialState = {
    ids: [1,2,3],
};

const rootReducer = createReducer<typeof initialState, number>({
    [ADD_ID]: (state, {payload}) => ({
        ...state,
        ids: [...state.ids, payload],
    }),
}, initialState);

export default rootReducer;
