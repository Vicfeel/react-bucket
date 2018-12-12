import React, {PureComponent} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import {Link, RouteComponentProps} from 'react-router-dom';
import {parseUrl} from 'query-string';

import {Button} from 'antd';

import {State} from 'common/types';
import {addId} from '../actions';

const actions = {
    push,
    addId,
};

const mapStateToProps = ({temp: {ids}}: State) => ({
    ids,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

interface ListViewRouteQuery {
    name ?: string;
}

type ListViewStateProps = ReturnType<typeof mapStateToProps>;

type ListViewDispatchProps = ReturnType<typeof mapDispatchToProps>;

type ListViewProps = RouteComponentProps & ListViewStateProps & ListViewDispatchProps;

class ListView extends PureComponent<ListViewProps> {
    private handleAddId = (e) => {
        const {actions: {addId}} = this.props;

        addId(2);
    }

    render() {
        const {ids} = this.props;

        return (
            <div>
                <Button onClick={this.handleAddId}>dispatch Add</Button>
                <div>{name}</div>
                <Link to="range">跳转</Link>
                <div>{ids.join(',')}</div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
