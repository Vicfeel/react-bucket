import React from 'react';
import {observer} from 'mobx-react';
import {useStore} from './store';

const List = observer(() => {
    const store = useStore();

    return (
        <>
            {store.activeTodos.map(todo => (
                <div key={todo.key}>{todo.title}</div>
            ))}
        </>
    );
});

export default List;
