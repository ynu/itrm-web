// in src/posts.js
import React from 'react';
import { List, Datagrid, TextField, EditButton } from 'admin-on-rest';

export default (props) => (
    <List {...props} title="网站及应用系统" >
        <Datagrid>
            <TextField source="domain" />
            <TextField source="name" />
            <EditButton />
        </Datagrid>
    </List>
);