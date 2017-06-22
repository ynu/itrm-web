import React from 'react';
import { Create, EditButton, ReferenceInput, DateInput, BooleanInput, required, NumberInput, TextInput, TabbedForm, FormTab, SelectInput } from 'admin-on-rest';
import SelectOrDefaultInput from '../SelectOrDefaultInput';

export default (props) => (
    <Create {...props} title="添加微博账号信息" >
        <TabbedForm>
            <FormTab label="基本信息">
                <TextInput source="name" label="名称" validate={[ required ]} />
                <TextInput source="account" label="账号" validate={[ required ]} />
                <TextInput source="url" label="微博地址" validate={[ required ]} />
                <ReferenceInput label="所属部门" source="dept.id" reference="zzjg" allowEmpty>
                      <SelectInput optionText="name" />
                  </ReferenceInput>
                <DateInput source="kbrq" label="开办日期" validate={[ required ]} />
            </FormTab>
            <FormTab label="管理员">
                <TextInput source="manager.name" label="姓名" validate={[ required ]} />
                <TextInput source="manager.id" label="一卡通号" validate={[ required ]} />                            
                <NumberInput source="manager.phone" label="手机号" validate={[ required ]} />                
            </FormTab>
            <FormTab label="认证情况">
                <BooleanInput source="certification.yrz" label="是否已经认证" />
                <TextInput source="certification.zt" label="认证主体" />              
            </FormTab>
        </TabbedForm>
    </Create>
);