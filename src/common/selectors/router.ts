import {State} from 'common/types';

export const getPathname = ({router: {location}}: State) => location.pathname;
