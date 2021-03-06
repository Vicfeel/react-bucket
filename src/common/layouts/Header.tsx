import React, {StatelessComponent} from 'react';

import {Layout, Menu} from 'antd';

import styles from './Header.less';

const {Header: AntdHeader} = Layout;

const Header: StatelessComponent = () => (
    <AntdHeader className={styles.header}>
        <div className={styles.logo} />
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{lineHeight: '64px'}}
        >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
    </AntdHeader>
);

export default Header;
