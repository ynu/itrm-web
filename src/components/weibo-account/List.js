import React from 'react';
import { List, Datagrid, TextField, ChipField, BooleanField, ReferenceField, ReferenceArrayField, EditButton, DeleteButton } from 'admin-on-rest';

export default (props) => (
    <List {...props} title="微博账号" >
        <Datagrid>
            <TextField source="name" label="名称" />
            <TextField source="account" label="账号" />
            <TextField source="url" label="地址" />
            <ChipField source="manager.name" label="管理员" />
            <BooleanField source="certification.yrz" label="认证情况" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);