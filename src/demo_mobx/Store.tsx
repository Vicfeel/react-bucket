import React, {createContext, useContext} from 'react';
import {configure} from 'mobx';
import {useLocalStore} from 'mobx-react';

interface Todo {
    key: string;
    title: string;
    active: boolean;
}

export const createStore = () => ({
    todos: [] as Todo[],
    addTodo(todo: Todo) {
        this.todos.push(todo);
    },
    get activeTodos() {
        return this.todos.filter(todo => todo.active);
    },
});

export type Store = ReturnType<typeof createStore>;

const StoreContext = createContext<Store|null>(null);

// Mobx config, forbidden modifing store without action
configure({enforceActions: true});

// StoreProvider, wrapped around your app
export const StoreProvider = ({children}) => {
    const store = useLocalStore(createStore);

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

// UseStore hooks, return the latest store
export const useStore = () => {
    const store = useContext(StoreContext);

    if (!store) {
        throw new Error('miss provider');
    }

    return store;
};
