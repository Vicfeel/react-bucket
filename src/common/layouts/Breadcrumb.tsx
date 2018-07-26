import React, {PureComponent} from 'react';

import {Breadcrumb as AntdBreadcrumb} from 'antd';

class Breadcrumb extends PureComponent {
    render() {
        return (
            <AntdBreadcrumb style={{margin: '16px 0'}}>
                <AntdBreadcrumb.Item>Home</AntdBreadcrumb.Item>
                <AntdBreadcrumb.Item>List</AntdBreadcrumb.Item>
                <AntdBreadcrumb.Item>App</AntdBreadcrumb.Item>
            </AntdBreadcrumb>
        );
    }
}

export default Breadcrumb;
