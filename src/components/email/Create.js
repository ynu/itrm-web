import React from 'react';
import { Create, EditButton, required, ReferenceInput, SelectInput, DateInput, email, NumberInput, TextInput, TabbedForm, FormTab } from 'admin-on-rest';
import SelectOrDefaultInput from '../SelectOrDefaultInput';

export default (props) => (
    <Create {...props} title="添加公共电子邮箱信息" >
        <TabbedForm>
            <FormTab label="基本信息">
                <TextInput source="account" label="账号" validate={[ required, email ]} />
                <TextInput source="yt" label="用途" validate={[ required ]} />
                <ReferenceInput label="所属部门" source="dept.id" reference="zzjg" allowEmpty>
                      <SelectInput optionText="name" />
                  </ReferenceInput>
                <DateInput source="ktrq" label="开通日期" validate={[ required ]} />
            </FormTab>
            <FormTab label="管理员">
                <TextInput source="manager.name" label="姓名" validate={[ required ]} />
                <TextInput source="manager.id" label="一卡通号" validate={[ required ]} />                            
                <NumberInput source="manager.phone" label="手机号" validate={[ required ]} />                
            </FormTab>
        </TabbedForm>
    </Create>
);