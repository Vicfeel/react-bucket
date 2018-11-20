import {
    ActionType,
    BaseActionCreator,
    ActionCreator,
    MetaActionCreator,
    BaseReducer,
    Reducer,
    MetaReducer,
    MetaAction,
    BaseReducerMap,
    ReducerMap,
    MetaReducerMap,
} from '../types';

function createAction(type: ActionType): BaseActionCreator;
function createAction<P>(type: ActionType): ActionCreator<P>;
function createAction<P, M>(type: ActionType): MetaActionCreator<P, M>;
function createAction<P, M>(type: ActionType): any {
    return (payload: P, meta: M) => ({
        type,
        ...meta ? {meta} : {},
        ...payload ? {payload} : {},
    });
}

function createReducer<S>(reducerMap: BaseReducerMap<S>, initialState: S): BaseReducer<S>;
function createReducer<S, P>(reducerMap: ReducerMap<S, P>, initialState: S): Reducer<S, P>;
function createReducer<S, P, M>(reducerMap: MetaReducerMap<S, P, M>, initialState: S): MetaReducer<S, P, M>;
function createReducer<S, P, M>(reducerMap: MetaReducerMap<S, P, M>, initialState: S): any {
    return (state = initialState, action: MetaAction<P, M>) => {
        const {type} = action;

        return reducerMap[type] ? reducerMap[type](state, action) : state;
    };
}

export {
    createAction,
    createReducer,
};
