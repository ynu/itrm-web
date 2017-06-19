// in src/posts.js
import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'admin-on-rest';

export default (props) => (
    <List {...props} title="网站及应用系统" >
        <Datagrid>
            <TextField source="domain" label="域名" />
            <TextField source="name" label="名称" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);