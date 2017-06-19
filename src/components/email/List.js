import React from 'react';
import { List, Datagrid, TextField, ChipField, ReferenceField, ReferenceArrayField, EditButton,DeleteButton } from 'admin-on-rest';

export default (props) => (
    <List {...props} title="公共电子邮箱" >
        <Datagrid>
            <TextField source="account" label="邮箱账号" />
            <ChipField source="manager.name" label="管理员" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);