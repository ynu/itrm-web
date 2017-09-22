import React from 'react';
import { List, Datagrid, TextField, FunctionField, ShowButton,
  Filter, TextInput, SelectInput } from 'admin-on-rest';
import FlatButton from 'material-ui/FlatButton';
import { auditStatus } from '../../config';

const urlRender = ({mainPageUrl, name}) =>
    <FlatButton href={mainPageUrl} label={name} target="_blank"
        labelStyle={{ textTransform: '' }}
    />;

const WebsiteFilter = (props) => (
  <Filter {...props}>
      <TextInput label="名称/域名" source="q" />
      <SelectInput source="latestAuditLog.status" label="审核状态" choices={[
        { id: auditStatus.CREATED, name: '未提交审核' },
        { id: auditStatus.SYDW_APPROVED, name: '已提交审核' },
        { id: auditStatus.ITC_REJECTED, name: '审核未通过' },
        { id: auditStatus.ITC_APPROVED, name: '已审核通过' },
      ]} />
  </Filter>
);

export default (props) => (
    <List {...props} title="网站及应用系统" filters={<WebsiteFilter />}>
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