import React, {PureComponent} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Layout} from 'antd';

import routes from '../routes';

import styles from './Main.less';

const {Content: AntdContent} = Layout;

class Main extends PureComponent {
    render() {
        return (
            <AntdContent className={styles.main}>
                <Switch>
                    {routes.map(routeProps =>
                        <Route
                            key={routeProps.path}
                            {...routeProps}
                        />,
                    )}
                </Switch>
            </AntdContent>
        );
    }
}

export default Main;
