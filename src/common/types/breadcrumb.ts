import {ReactNode} from 'react';
import {RouteProps} from 'react-router';

interface Breadcrumb extends Pick<RouteProps, 'path' | 'exact'> {
    childs: ReadonlyArray<ReactNode>;
}

export type Breadcrumbs = ReadonlyArray<Breadcrumb>;
