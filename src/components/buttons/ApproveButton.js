import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { showNotification as showNotificationAction, crudGetOne as crudGetOneAction } from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/action/done';
import { apiHost } from '../../config';

class ApproveButton extends Component {
    handleClick = () => {
        const { basePath, resource, crudGetOne, record, showNotification } = this.props;
        fetch(`${apiHost}/audit/itc-approve${basePath}/${record.id}`, { method: 'POST', credentials: 'include' })
            .then(() => {
                showNotification('审核成功');
                crudGetOne(resource, record.id, basePath);
            })
            .catch((e) => {
                console.error(e);
                showNotification('审核失败', 'warning')
            });
    }

    render() {
        return <FlatButton primary label="审核通过" onClick={this.handleClick} icon={<Icon />} />;
    }
}

ApproveButton.propTypes = {
    record: PropTypes.object,
    showNotification: PropTypes.func,
};

export default connect(null, {
    showNotification: showNotificationAction,
    crudGetOne: crudGetOneAction,
})(ApproveButton);