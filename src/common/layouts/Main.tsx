import React, {StatelessComponent} from 'react';
import {Switch, Route, Redirect, RouteProps} from 'react-router-dom';
import {Layout} from 'antd';

import styles from './Main.less';

const {Content: AntdContent} = Layout;

interface MainProps {
    routes: ReadonlyArray<RouteProps>;
}

const Main: StatelessComponent<MainProps> = ({routes}) => (
    <AntdContent className={styles.main}>
        <Switch>
            {routes.map(routeProps => (
                <Route
                    key={routeProps.path as string}
                    {...routeProps}
                />
            ))}
            <Redirect
                from="*"
                to="/list"
            />
        </Switch>
    </AntdContent>
);

export default Main;
