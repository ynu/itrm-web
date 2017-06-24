import React from 'react';
import { List, Datagrid, TextField, FunctionField, ChipField, BooleanField, ReferenceField, ReferenceArrayField, EditButton, DeleteButton } from 'admin-on-rest';
import FlatButton from 'material-ui/FlatButton';

const urlRender = ({url, name}) =>
    <FlatButton href={url} label={name}
        labelStyle={{ textTransform: '' }}
    />;

export default (props) => (
    <List {...props} title="微博账号" >
        <Datagrid>
            <TextField source="name" label="名称" />
            <FunctionField label="账号" render={record => urlRender(record)} />
            <ChipField source="manager.name" label="管理员" />
            <BooleanField source="certification.yrz" label="认证情况" />
            <DeleteButton />
        </Datagrid>
    </List>
);