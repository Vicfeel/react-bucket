import {createBrowserHistory} from 'history';
import queryString from 'query-string';
import withQuery from 'history-query-enhancer';

const history = createBrowserHistory();

export default withQuery(queryString)(history);
