import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, TextInput, TabbedForm, FormTab, DateInput } from 'admin-on-rest';

export default (props) => (
    <Edit {...props} title="编辑网站或应用系统信息" >
        <TabbedForm>
            <FormTab label="基本信息">
                <TextInput source="name" label="网站名称" />
                <TextInput source="domain" label="域名" />
                <TextInput source="mainPageUrl" label="首页地址" />
                <SelectInput source="catagory" label="类型" choices={[
                    { id: 1, name: '门户网站' },
                    { id: 2, name: '应用系统' },
                ]} />
                <ReferenceInput label="所属部门" source="dept.id" reference="departments" allowEmpty>
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <DateInput source="kbrq" label="开办日期" />
                <LongTextInput source="yt" label="用途" />
            </FormTab>
            <FormTab label="英文版" >
                <SelectInput label="是否有英文版" source="englishVersion.status" choices={[
                    {id: 1, name: '有英文版，且正常使用' },
                    { id: 2, name: '有英文版，但未使用', },
                    { id: 3, name: '没有英文版' },
                ]} />
                <TextInput source="english.mainPageUrl" label="英文版首页地址" />
            </FormTab>
            <FormTab label="服务器信息">
                <SelectInput label="托管方式" source="provideInfo.tgfs" choices={[
                    { id: 1, name: '站群系统' },
                    { id: 2, name: '数据中心虚拟机' },
                    { id: 3, name: '自有服务器' },
                    { id: 4, name: '校外第三方服务商' },
                ]} />
                <LongTextInput source="provideInfo.realServersText" label="服务器地址及端口，每行填写一个服务器地址及端口" />
            </FormTab>
        </TabbedForm>
    </Edit>
);