import {RouteComponentProps as LegacyRouteComponentProps, RouteProps} from 'react-router-dom';

import {EnhancedLocation} from 'history-query-enhancer';

export interface RouteComponentProps<Q = {}, M = {}> extends LegacyRouteComponentProps<M> {
    location: EnhancedLocation<Q>;
}

export type Routes = ReadonlyArray<RouteProps>;
