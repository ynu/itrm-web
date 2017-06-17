import React from 'react';
import { Edit, required, NumberInput, SelectInput, TextInput, TabbedForm, FormTab } from 'admin-on-rest';

export default (props) => (
    <Edit {...props} title="编辑IT资源主管单位信息" >
        <TabbedForm>
            <FormTab label="基本信息">
                <TextInput source="name" label="单位名称" validate={[ required ]} />
            </FormTab>
            <FormTab label="主要负责人">
                <TextInput source="zyfzr.name" label="姓名" validate={[ required ]} />
                <TextInput source="zyfzr.id" label="一卡通号" validate={[ required ]} />                
                <TextInput source="zyfzr.zw" label="职务" validate={[ required ]} />                
                <NumberInput source="zyfzr.phone" label="手机号" validate={[ required ]} />                
            </FormTab>
            <FormTab label="保密审查员">
                <TextInput source="bmscy.name" label="姓名" validate={[ required ]} />
                <TextInput source="bmscy.id" label="一卡通号" validate={[ required ]} />                
                <NumberInput source="bmscy.phone" label="手机号" validate={[ required ]} />                
            </FormTab>
        </TabbedForm>
    </Edit>
);