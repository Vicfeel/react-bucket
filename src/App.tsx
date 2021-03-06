import React, {StatelessComponent} from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';

import {Layout} from 'antd';

import {store, history, routes, breadcrumbs} from 'common';
import {Header, Sider, Footer, Main, Breadcrumb} from 'common/layouts';

import styles from './App.less';

const App: StatelessComponent = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Layout className={styles.container}>
                <Header />
                <Layout className={styles.body}>
                    <Sider />
                    <Layout className={styles.main}>
                        <Breadcrumb breadcrumbs={breadcrumbs} />
                        <Main routes={routes} />
                    </Layout>
                </Layout>
                <Footer />
            </Layout>
        </ConnectedRouter>
    </Provider>
);

export default App;
