import React from 'react';
import { List, Datagrid, TextField, ChipField, BooleanField, ReferenceField, ReferenceArrayField, EditButton,DeleteButton } from 'admin-on-rest';

export default (props) => (
    <List {...props} title="安全责任书列表" >
        <Datagrid>
            <TextField source="creation.date" label="填报日期" />
            <ReferenceField label="单位名称" source="dept.id" reference="departments" >
                <TextField source="name" />
            </ReferenceField>
            <BooleanField source="pre_jcjg.wgxx.sfy" label="是否存在违规信息" />
            <DeleteButton />
        </Datagrid>
    </List>
);