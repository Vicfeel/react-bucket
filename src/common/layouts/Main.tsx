import React, {PureComponent} from 'react';

import {Layout} from 'antd';

import ListView from '../../containers/ListView';
import RangeView from '../../containers/RangeView';

import styles from './Main.less';

const {Content: AntdContent} = Layout;

class Main extends PureComponent {
    render() {
        return (
            <AntdContent className={styles.main}>
                <ListView />
                <RangeView />
            </AntdContent>
        );
    }
}

export default Main;
