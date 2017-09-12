import React from 'react';
import { List, Datagrid, TextField, FunctionField, ReferenceField, ChipField, EditButton, ShowButton } from 'admin-on-rest';
import FlatButton from 'material-ui/FlatButton';
import { auditStatus } from '../../config';

const urlRender = ({mainPageUrl, name}) =>
    <FlatButton href={mainPageUrl} label={name}
        labelStyle={{ textTransform: '' }}
    />;

export default (props) => (
    <List {...props} title="网站及应用系统" >
        <Datagrid>
            <FunctionField label="名称" render={record => urlRender(record)} />
            <TextField source="domain" label="域名" />
            <TextField source="dept.name" label="责任单位" />
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
            <ShowButton />
        </Datagrid>
    </List>
);