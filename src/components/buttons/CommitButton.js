import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { showNotification as showNotificationAction, crudGetOne as crudGetOneAction } from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/communication/call-made';
import { apiHost } from '../../config';

class CommitButton extends Component {
    handleClick = () => {
        const { basePath, resource, crudGetOne, record, showNotification } = this.props;
        fetch(`${apiHost}/audit/commit${basePath}/${record.id}`, { method: 'POST', credentials: 'include' })
            .then(() => {
                showNotification('提交成功');
                crudGetOne(resource, record.id, basePath);
            })
            .catch((e) => {
                console.error(e);
                showNotification('提交失败', 'warning')
            });
    }

    render() {
        return <FlatButton primary label="提交审核" onClick={this.handleClick} icon={<Icon />} />;
    }
}

CommitButton.propTypes = {
    push: PropTypes.func,
    record: PropTypes.object,
    showNotification: PropTypes.func,
};

export default connect(null, {
    showNotification: showNotificationAction,
    crudGetOne: crudGetOneAction,
})(CommitButton);