import React from 'react';
import { Create, EditButton, required, maxLength, minLength, TextInput, ReferenceInput, SelectInput, TabbedForm, FormTab } from 'admin-on-rest';

export default props => (
    <Create {...props} title="添加IT资源使用单位信息" redirect="list">
        <TabbedForm redirect="list">
            <FormTab label="基本信息">
                <ReferenceInput label="单位名称" source="dept.id" reference="zzjg" allowEmpty validate={[required]} >
                      <SelectInput optionText="name" />
                  </ReferenceInput>
                <TextInput source="zyfzr.name" label="主要负责人姓名" validate={[required]} />
                <TextInput source="zyfzr.id" label="主要负责人一卡通号" validate={[required]} />
                <TextInput source="zyfzr.zw" label="主要负责人职务" validate={[required]} />
                <TextInput source="zyfzr.phone" label="主要负责人手机号" validate={[required, maxLength(11), minLength(11)]} />
                <TextInput source="bmscy.name" label="保密审查员姓名" validate={[required]} />
                <TextInput source="bmscy.id" label="保密审查员一卡通号" validate={[required]} />
                <TextInput source="bmscy.phone" label="保密审查员手机号" validate={[required, maxLength(11), minLength(11)]} />
            </FormTab>

        </TabbedForm>
    </Create>
);
