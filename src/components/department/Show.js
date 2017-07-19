import React, { Component } from 'react';
import { CardActions } from 'material-ui/Card';
import { connect } from 'react-redux';
import { Show, SimpleShowLayout, RefreshButton, DeleteButton, TextField, FunctionField, DateField, EditButton, RichTextField } from 'admin-on-rest';
import DynamicButton from '../DynamicButton';
import { WithdrawButton, CommitButton, ApproveButton, RejectButton } from '../buttons';
import FetchUser from '../../FetchUser';
import { auditStatus, isAdmin } from '../../config';

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
    const { showCommitButton, showWithDrawButton, showApproveButton, showRejectButton, user, data } = this.props;
    if (!user || !data) return null;
    return (
      <CardActions style={cardActionStyle}>
        <DynamicButton show={showCommitButton} {...this.props} record={data} button={<CommitButton/>} />
        <DynamicButton {...this.props} show={showWithDrawButton} record={data} button={<WithdrawButton/>} />  
        <DynamicButton {...this.props} show={showApproveButton} record={data} button={<ApproveButton/>} />  
        <DynamicButton {...this.props} show={showRejectButton} record={data} button={<RejectButton/>} />  
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
    const isCreator = (user, record) => {
      try {
        return user.id === record.creation.creator.id;
      } catch (err) {
        return false;
      }
    }
    const { user } = this.props;
    // if (!user || !user.roles) return null;
    
    const actions = <ShowActions
      {...this.props}
      record={this.props.data}
      showCommitButton={record => {
        try {
          /* console.log(isAdmin(user.roles), isCreator(user, record), auditStatus.isCreated(record)) */
          return (isAdmin(user.roles) || isCreator(user, record)) && auditStatus.isCreated(record);
        } catch (error) {
          return false;
        }
      }}
      showWithDrawButton={record =>(isAdmin(user.roles) || isCreator(user, record)) && auditStatus.isSydwApproved(record)}
      showApproveButton={record => (isAdmin(user.roles) || isCreator(user, record)) && auditStatus.isSydwApproved(record)}
      showRejectButton={record => isCreator(user, record) && (
        auditStatus.isSydwApproved(record) || auditStatus.isItcApproved(record)
      )}
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
            <FunctionField label="审核状态"
              render={record => {
                if (!record.latestAuditLog) record.latestAuditLog = {
                  status: auditStatus.CREATED,
                };
                switch (record.latestAuditLog.status) {
                  case auditStatus.CREATED:
                    return '未提交审核';
                  case auditStatus.SYDW_APPROVED:
                    return '已提交审核'
                  case auditStatus.ITC_APPROVED:
                    return '信息技术中心已审核通过';
                  case auditStatus.ITC_REJECTED:
                    return `信息技术中心审核未通过（原因：${record.latestAuditLog.remark}）`
                }
                return '';
              }}
            />
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