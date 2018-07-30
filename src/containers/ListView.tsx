import React, {PureComponent} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import {Link} from 'react-router-dom';

import {Button} from 'antd';

import {addId} from '../common/actions';

const actions = {
    push,
    addId,
};

const mapStateToProps = ({ids}) => ({
    ids,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

type ListViewStateProps = ReturnType<typeof mapStateToProps>;

type ListViewDispatchProps = ReturnType<typeof mapDispatchToProps>;

type ListViewProps = ListViewStateProps & ListViewDispatchProps;

class ListView extends PureComponent<ListViewProps> {
    private handleAddId = (e) => {
        const {actions: {push, addId}} = this.props;

        // addId(2);
        push('range');
    }

    render() {
        const {ids} = this.props;

        return (
            <div>
                <Button onClick={this.handleAddId}>dispatch Add</Button>
                <Link to="range">跳转</Link>
                <div>{ids.join(',')}</div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
