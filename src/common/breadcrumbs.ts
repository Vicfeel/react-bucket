import {Breadcrumbs} from 'common/types';

const breadcrumbs: Breadcrumbs = [
    {
        path: '/list',
        exact: true,
        childs: ['测试', '列表'],
    }, {
        path: '/range',
        exact: true,
        childs: ['测试', '范围'],
    },
];

export default breadcrumbs;
