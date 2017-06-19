import React from 'react';
import { Edit, EditButton, SelectInput, required, BooleanInput, ReferenceInput, DateInput, NumberInput, TextInput, TabbedForm, FormTab } from 'admin-on-rest';
import SelectOrDefaultInput from '../SelectOrDefaultInput';

export default (props) => (
    <Edit {...props} title="修改微信公众号信息" >
        <TabbedForm>
            <FormTab label="基本信息">
                <TextInput source="name" label="名称" validate={[ required ]} />
                <TextInput source="account" label="微信号" validate={[ required ]} />
                <ReferenceInput label="所属部门" source="dept.id" reference="departments" allowEmpty>
                    <SelectOrDefaultInput optionText="name" />
                </ReferenceInput>
                <SelectInput source="type" label="类型" optionText="id" choices={[
                    { id: '订阅号' },
                    { id: '服务号' },
                    { id: '企业号' },
                    { id: '小程序' },
                ]} />
                <DateInput source="kbrq" label="开办日期" />

            </FormTab>
            <FormTab label="管理员">
                <TextInput source="manager.name" label="姓名" validate={[ required ]} />
                <TextInput source="manager.id" label="一卡通号" validate={[ required ]} />                            
                <NumberInput source="manager.phone" label="手机号" validate={[ required ]} />                
            </FormTab>
            <FormTab label="认证情况">
                <BooleanInput source="certification.yrz" label="是否已经认证" />
                <TextInput source="certification.zt" label="认证主体" />              
                <DateInput source="certification.dqrq" label="认证到期日期" />
            </FormTab>
        </TabbedForm>
    </Edit>
);