import {Routes} from 'common/types/router';

import ListView from './containers/ListView';
import RangeView from './containers/RangeView';

const routes: Routes = [{
    path: '/list',
    exact: true,
    component: ListView,
}, {
    path: '/range',
    exact: true,
    component: RangeView,
}];

export default routes;
