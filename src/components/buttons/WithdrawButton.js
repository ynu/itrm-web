import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { showNotification as showNotificationAction, crudGetOne as crudGetOneAction } from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/communication/call-received';
import { apiHost } from '../../config';

class WithdrawButton extends Component {
    handleClick = () => {
        const { basePath, resource, crudGetOne, record, showNotification } = this.props;
        fetch(`${apiHost}/audit/withdraw${basePath}/${record.id}`, { method: 'POST', credentials: 'include' })
            .then(() => {
                showNotification('撤回成功');
                crudGetOne(resource, record.id, basePath);
            })
            .catch((e) => {
                console.error(e);
                showNotification('Error: comment not approved', 'warning')
            });
    }

    render() {
        return <FlatButton primary label="撤回" onClick={this.handleClick} icon={<Icon />} />;
    }
}

WithdrawButton.propTypes = {
    push: PropTypes.func,
    record: PropTypes.object,
    showNotification: PropTypes.func,
};

export default connect(null, {
    showNotification: showNotificationAction,
    crudGetOne: crudGetOneAction,
})(WithdrawButton);