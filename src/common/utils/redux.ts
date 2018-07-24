const createAction = type => payload => ({
    type,
    ...payload ? {payload} : {},
});

const createReducer = (handler, initialState) =>
    (state = initialState, action) => {
        const {type} = action;
        
        return handler[type] ? handler[type](state, action) : state;
    };

export {
    createAction,
    createReducer,
};
