import {RouteProps} from 'react-router-dom';

import ListView from './containers/ListView';
import RangeView from './containers/RangeView';

const routes: ReadonlyArray<RouteProps> = [
    {
        path: '/redux/list',
        exact: true,
        component: ListView,
    }, {
        path: '/redux/range',
        exact: true,
        component: RangeView,
    },
];

export default routes;
