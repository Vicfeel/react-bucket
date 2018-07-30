import React, {StatelessComponent} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Layout} from 'antd';

import routes from '../routes';

import styles from './Main.less';

const {Content: AntdContent} = Layout;

const Main: StatelessComponent = () => {
    return (
        <AntdContent className={styles.main}>
            <Switch>
                {routes.map(routeProps =>
                    <Route
                        key={routeProps.path}
                        {...routeProps}
                    />,
                )}
                <Redirect
                    from="*"
                    to="/list"
                />
            </Switch>
        </AntdContent>
    );
};

export default Main;
