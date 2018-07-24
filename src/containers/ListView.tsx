import React, {PureComponent} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button} from 'antd';

import {addId} from '../common/actions';

const actions = {
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
        const {addId} = this.props.actions;

        addId(2);
    }

    render() {
        const {ids} = this.props;

        return (
            <div>
                <Button onClick={this.handleAddId}>增加</Button>
                <div>{ids.join(',')}</div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
