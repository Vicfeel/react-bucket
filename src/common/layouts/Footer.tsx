import React, {StatelessComponent} from 'react';

import {Layout} from 'antd';

const {Footer: AntdFooter} = Layout;

const Footer: StatelessComponent = () => (
    <AntdFooter style={{textAlign: 'center'}}>
        copyright ©2018
    </AntdFooter>
);

export default Footer;
