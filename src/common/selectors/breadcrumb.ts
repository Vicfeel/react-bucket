import {Breadcrumbs} from 'common/types';
import {matchPath} from 'react-router';

export const getCurrentBreadcrumb = (pathname: string, breadcrumbs: Breadcrumbs) => {
    return breadcrumbs.find(({path, exact}) => {
        debugger;
        const match = matchPath(pathname, {path, exact});

        return !!match;
    });
};
