import React, { Component } from 'react';
import { CardActions } from 'material-ui/Card';
import { connect } from 'react-redux';
import { Show, SimpleShowLayout, RefreshButton, DeleteButton, TextField, FunctionField, DateField, EditButton, RichTextField } from 'admin-on-rest';
import DynamicButton from '../DynamicButton';
import { WithdrawButton, CommitButton } from '../buttons';
import FetchUser from '../../FetchUser';
import { auditStatus } from '../../config';

const Title = ({ record }) => {
  return <span>使用单位： {record ? record.name : ''}</span>;
};

const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right',
};
class ShowActions extends Component {
  render() {
    const { showCommitButton, showWithDrawButton, user, data } = this.props;
    if (!user || !data) return null;
    return (
      <CardActions style={cardActionStyle}>
        <DynamicButton show={showCommitButton} {...this.props} record={data} button={<CommitButton/>} />
        <DynamicButton {...this.props} show={showWithDrawButton} record={data} button={<WithdrawButton/>} />  
        <EditButton {...this.props} record={data} />
        <DeleteButton {...this.props} />
        <RefreshButton {...this.props} />
    </CardActions>
    );
  }
}

class ShowDepartment extends Component {
  state = {  }
  render() {
    const isCreator = (user, record) => user.id === record.creation.creator.id;
    const { user } = this.props;
    const actions = <ShowActions
      {...this.props}
      record={this.props.data}
      showCommitButton={record => {
        try {
          return isCreator(user, record) && auditStatus.isCreated(record);
        } catch (error) {
          return false;
        }
      }}
      showWithDrawButton={record =>isCreator(user, record) && auditStatus.isSydwApproved(record)}
    />
    return (
      <div>
        <FetchUser />
        <Show {...this.props} title={<Title />} actions={actions}>
          <SimpleShowLayout>
            <TextField source="name" label="单位名称" />
            <TextField source="zyfzr.name" label="主要负责人" />
            <TextField source="zyfzr.zw" label="主要负责人职务" />
            <TextField source="zyfzr.id" label="主要负责人一卡通号" />
            <TextField source="zyfzr.phone" label="主要负责人手机号" />
            <TextField source="bmscy.name" label="保密审查员" />
            <TextField source="bmscy.id" label="保密审查员一卡通号" />
            <TextField source="bmscy.phone" label="保密审查员手机号" />
          </SimpleShowLayout>
        </Show>
      </div>
      
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
})
export default connect(mapStateToProps)(ShowDepartment);