import rootReducer from '../rootReducer';

export type State = ReturnType<typeof rootReducer>;

export type ActionType = string;

export interface BaseAction {
    type: ActionType;
}

export interface Action<P> extends BaseAction {
    payload: P;
    error?: boolean;
}

export interface MetaAction<P, M> extends Action<P> {
    meta: M;
}

export type BaseActionCreator = () => BaseAction;

export type ActionCreator<P> = (payload: P) => Action<P>;

export type MetaActionCreator<P, M> = (paload: P, meta: M) => MetaAction<P, M>;

export type BaseReducer<S> = (state: S, action: BaseAction) => S;

export type Reducer<S, P> = (state: S, action: Action<P>) => S;

export type MetaReducer<S, P, M> = (state: S, MetaAction: MetaAction<P, M>) => S;

export type BaseReducerMap<S> = Record<ActionType, BaseReducer<S>>;

export type ReducerMap<S, P> = Record<ActionType, Reducer<S, P>>;

export type MetaReducerMap<S, P, M> = Record<ActionType, MetaReducer<S, P, M>>;
