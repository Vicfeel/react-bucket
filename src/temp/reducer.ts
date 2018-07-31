import {createReducer} from '../common/utils';
import {ADD_ID} from './actionTypes';

const initialState = {
    ids: [],
};

const reducer = createReducer<typeof initialState, number>({
    [ADD_ID]: (state, {payload}) => ({
        ...state,
        ids: [...state.ids, payload],
    }),
}, initialState);

export default reducer;
