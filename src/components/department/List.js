import React from 'react';
import { List, Datagrid, TextField, ChipField, ReferenceField, ReferenceArrayField, EditButton, DeleteButton } from 'admin-on-rest';

export default (props) => (
    <List {...props} title="主管单位" >
        <Datagrid>
            <TextField source="name" label="单位名称" />
            <ChipField source="zyfzr.name" label="主要负责人" />
            <ChipField source="bmscy.name" label="保密审查员" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);