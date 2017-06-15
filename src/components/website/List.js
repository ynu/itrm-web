// in src/posts.js
import React from 'react';
import { List, Datagrid, TextField, EditButton } from 'admin-on-rest';

export default (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="domain" />
            <TextField source="name" />
            <EditButton />
        </Datagrid>
    </List>
);