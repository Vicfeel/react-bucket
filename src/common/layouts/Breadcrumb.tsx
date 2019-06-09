import React, {StatelessComponent} from 'react';
import {connect} from 'react-redux';

import {Breadcrumb as AntdBreadcrumb} from 'antd';

import {getPathname, getCurrentBreadcrumb} from 'common/selectors';
import {State, Breadcrumbs} from 'common/types';

const AntdBreadcrumbItem = AntdBreadcrumb.Item;

interface BreadcrumbOwnProps {
    breadcrumbs: Breadcrumbs;
}

const mapStateToProps = (state: State, {breadcrumbs}: BreadcrumbOwnProps) => {
    const pathname = getPathname(state);
    const breadcrumb = getCurrentBreadcrumb(pathname, breadcrumbs);

    return {
        breadcrumb,
    };
};

type BreadcrumbProps = ReturnType<typeof mapStateToProps>;

const Breadcrumb: StatelessComponent<BreadcrumbProps> = ({
    breadcrumb,
}) => (
    <AntdBreadcrumb style={{margin: '16px 0'}}>
        {breadcrumb && breadcrumb.childs.map((child, index) => (
            <AntdBreadcrumbItem key={String(index)}>{child}</AntdBreadcrumbItem>
        ))}
    </AntdBreadcrumb>
);

export default connect(mapStateToProps)(Breadcrumb);
