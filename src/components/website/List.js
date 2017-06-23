// in src/posts.js
import React from 'react';
import { List, Datagrid, TextField, FunctionField, ReferenceField, ChipField, EditButton, DeleteButton } from 'admin-on-rest';
import FlatButton from 'material-ui/FlatButton';

const urlRender = ({mainPageUrl, name}) =>
    <FlatButton href={mainPageUrl} label={name}
        labelStyle={{ textTransform: '' }}
    />;

export default (props) => (
    <List {...props} title="网站及应用系统" >
        <Datagrid>
            <TextField source="domain" label="域名" />
            <FunctionField label="名称" render={record => urlRender(record)} />
            <ChipField label="管理员" source="manager.name" />
            <ReferenceField source="dept.id" label="责任单位" reference="zzjg" >
                <ChipField source="name" />
            </ReferenceField>
            <DeleteButton />
        </Datagrid>
    </List>
);