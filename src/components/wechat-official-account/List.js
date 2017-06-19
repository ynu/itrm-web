import React from 'react';
import { List, Datagrid, TextField, ChipField, BooleanField, ReferenceField, ReferenceArrayField, EditButton, DeleteButton } from 'admin-on-rest';

export default (props) => (
    <List {...props} title="微信公众号" >
        <Datagrid>
            <TextField source="name" label="名称" />
            <ChipField source="manager.name" label="管理员" />
            <BooleanField source="certification.yrz" label="是否认证" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);