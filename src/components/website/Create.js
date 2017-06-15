import React from 'react';
import { Create, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';

export default (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="domain" />
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);