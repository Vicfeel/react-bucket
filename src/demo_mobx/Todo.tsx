import React from 'react';
import {useStore} from './store';
import {Button} from 'antd';

const Todo = () => {
    const store = useStore();
    const handleClick = () => {
        store.addTodo({
            key: '1',
            title: '测试',
            active: true,
        });
    };

    return (
        <Button onClick={handleClick}>添加</Button>
    );
};

export default Todo;
