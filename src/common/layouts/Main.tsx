import React, {StatelessComponent} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Layout} from 'antd';

import {Routes} from 'common/types';

import styles from './Main.less';

const {Content: AntdContent} = Layout;

interface MainProps {
    routes: Routes;
}

const Main: StatelessComponent<MainProps> = ({routes}) => {
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
