import {RouteProps} from 'react-router-dom';

import TodoView from './TodoView';

const routes: ReadonlyArray<RouteProps> = [
    {
        path: '/mobx',
        component: TodoView,
    },
];

export default routes;
