import React from 'react';
import { Edit, EditButton, required, ReferenceInput, DateInput, email, NumberInput, TextInput, TabbedForm, FormTab } from 'admin-on-rest';
import SelectOrDefaultInput from '../SelectOrDefaultInput';

export default (props) => (
    <Edit {...props} title="编辑公共电子邮箱信息" >
        <TabbedForm>
            <FormTab label="基本信息">
                <TextInput source="account" label="账号" validate={[ required, email ]} />
                <TextInput source="yt" label="用途" validate={[ required ]} />
                <ReferenceInput label="所属部门" source="dept.id" reference="departments" allowEmpty>
                    <SelectOrDefaultInput optionText="name" validate={[ required ]} />
                </ReferenceInput>
                <DateInput source="ktrq" label="开通日期" validate={[ required ]} />
            </FormTab>
            <FormTab label="管理员">
                <TextInput source="manager.name" label="姓名" validate={[ required ]} />
                <TextInput source="manager.id" label="一卡通号" validate={[ required ]} />                            
                <NumberInput source="manager.phone" label="手机号" validate={[ required ]} />                
            </FormTab>
        </TabbedForm>
    </Edit>
);