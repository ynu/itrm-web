import React, { Component } from 'react';
import { CardActions } from 'material-ui/Card';
import { connect } from 'react-redux';
import { Show, SimpleShowLayout, RefreshButton, DeleteButton, TextField, FunctionField, DateField, EditButton, RichTextField } from 'admin-on-rest';
import DynamicButton from '../DynamicButton';
import { WithdrawButton, CommitButton, ApproveButton, RejectButton } from '../buttons';
import FetchUser from '../../FetchUser';
import { auditStatus, isAdmin } from '../../config';

const Title = ({ record }) => {
  return <span>网站或应用系统： {record ? record.name : ''}({record.domain})</span>;
};

const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right',
};
class ShowActions extends Component {
  render() {
    const { showCommitButton, showWithDrawButton, showApproveButton, showEditButton, showDeleteButton, showRejectButton, data } = this.props;
    if (!data) return null;
    return (
      <CardActions style={cardActionStyle}>
        <DynamicButton show={showCommitButton} {...this.props} record={data} button={<CommitButton/>} />
        <DynamicButton {...this.props} show={showWithDrawButton} record={data} button={<WithdrawButton/>} />  
        <DynamicButton {...this.props} show={showApproveButton} record={data} button={<ApproveButton/>} />  
        <DynamicButton {...this.props} show={showRejectButton} record={data} button={<RejectButton/>} />  
        <DynamicButton {...this.props} show={showEditButton} record={data} button={<EditButton />} />
        <DynamicButton {...this.props} show={showDeleteButton} record={data} button={<DeleteButton />} />
        <RefreshButton {...this.props} />
    </CardActions>
    );
  }
}

class ShowWebsite extends Component {
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

    const actions = <ShowActions
      {...this.props}
      record={this.props.data}
      showCommitButton={record => {
        try {
          return (isAdmin(user.roles) || isCreator(user, record)) && auditStatus.isCreated(record);
        } catch (error) {
          return false;
        }
      }}
      showWithDrawButton={record =>(isAdmin(user.roles) || isCreator(user, record)) && auditStatus.isSydwApproved(record)}
      showApproveButton={record => (isAdmin(user.roles) || isCreator(user, record)) && auditStatus.isSydwApproved(record)}
      showRejectButton={record => isAdmin(user.roles) && (
        auditStatus.isSydwApproved(record) || auditStatus.isItcApproved(record)
      )}
      showEditButton={record => {
        if (isAdmin(user.roles) || isCreator(user, record)){
          return !auditStatus.isSydwApproved(record) && !auditStatus.isItcApproved(record);
        }
        return false;
      }}
      showDeleteButton={record => {
        if (isAdmin(user.roles) || isCreator(user, record)){
          return auditStatus.isCreated(record);
        }
        return false;
      }}
    />
    return (
      <div>
        <FetchUser />
        <Show {...this.props} title={<Title />} actions={actions}>
          <SimpleShowLayout>
            <TextField source="name" label="网站名称" />
            <TextField source="domain" label="域名" />
            <TextField source="dept.name" label="主管单位" />
            <FunctionField label="管理员"
              render={record => {
                // 在编辑之后调转到show页面时，第一次render，record只有一个id字段，其他都没有
                if (!record.manager) return null;
                return `${record.manager.name}(教工号：${record.manager.id}，手机号：${record.manager.phone})`
                }} />
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
                    return `信息技术中心审核未通过（原因：${record.latestAuditLog.remark}），请重新编辑后再提交审核。`
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
export default connect(mapStateToProps)(ShowWebsite);