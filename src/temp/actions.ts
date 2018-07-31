import {ADD_ID} from './actionTypes';
import {createAction} from '../common/utils';

const addId = createAction<number>(ADD_ID);

export {
    addId,
};
