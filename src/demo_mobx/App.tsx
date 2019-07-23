import React, {StatelessComponent} from 'react';
import {StoreProvider} from './store';
import Todo from './Todo';
import List from './List';

const App: StatelessComponent = () => (
    <StoreProvider>
        <Todo />
        <List />
    </StoreProvider>
);

export default App;
