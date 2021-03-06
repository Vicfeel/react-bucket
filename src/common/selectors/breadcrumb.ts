import {Breadcrumbs} from 'common/types';
import {matchPath} from 'react-router';

export const getCurrentBreadcrumb = (pathname: string, breadcrumbs: Breadcrumbs) =>
    breadcrumbs.find(({path, exact}) => {
        const match = matchPath(pathname, {path, exact});

        return !!match;
    });
