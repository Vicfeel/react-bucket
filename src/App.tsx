import React, {StatelessComponent} from 'react';
import {Provider} from 'react-redux';

import {Layout} from 'antd';

import store from './common/store';
import {Header, Sider, Footer, Main, Breadcrumb} from './common/layouts';

import styles from './App.less';

const App: StatelessComponent = () => {
    return (
        <Provider store={store}>
            <Layout>
                <Header />
                <Layout className={styles.container}>
                    <Sider />
                    <Layout className={styles.main}>
                        <Breadcrumb />
                        <Main />
                    </Layout>
                </Layout>
                <Footer />
            </Layout>
        </Provider>
    );
};

export default App;
