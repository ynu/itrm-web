import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import fetch from 'isomorphic-fetch';
import { showNotification as showNotificationAction, crudGetOne as crudGetOneAction } from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/content/clear';
import { apiHost } from '../../config';

class RejectButton extends Component {
    state = {
        open: false,
        remark: '',
    };

    handleClick = () => {
        const { basePath, resource, crudGetOne, record, showNotification } = this.props;
        const { remark } = this.state;
        fetch(`${apiHost}${basePath}/itc-reject/${record.id}`, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ remark }),
        }).then(async (res) => {
            if (res.status === 200) {
                showNotification('审核驳回成功');
                crudGetOne(resource, record.id, basePath);
            } else {
                console.log(res);
                showNotification('审核驳回失败:' + await res.text());
            }
        }).catch((e) => {
            console.error(e);
            showNotification('审核驳回失败', 'warning')
        });
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton primary label='确定' onClick={this.handleClick} />,
            <FlatButton label="取消" onClick={this.handleClose} />,
        ];
        return (
            <span>
                <FlatButton secondary label="驳回" onClick={this.handleOpen} icon={<Icon />} />
                <Dialog
                    title="驳回理由"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    <TextField name="remark"
                        value={this.state.remark}
                        multiLine={true}
                        onChange={ (e, remark) => this.setState({ remark }) }
                    />
                </Dialog>
            </span>
        );
    }
}

RejectButton.propTypes = {
    record: PropTypes.object,
    showNotification: PropTypes.func,
};

export default connect(null, {
    showNotification: showNotificationAction,
    crudGetOne: crudGetOneAction,
})(RejectButton);