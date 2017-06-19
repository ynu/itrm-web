import React from 'react';
import { Edit, EditButton, DisabledInput, NumberInput, required, BooleanInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput, TabbedForm, FormTab, DateInput  } from 'admin-on-rest';
import SelectOrDefaultInput from '../SelectOrDefaultInput';

export default (props) => (
    <Edit {...props} title="编辑网站或应用系统" >
        <TabbedForm>
            <FormTab label="基本信息">
                <TextInput source="name" label="网站名称" validate={[ required ]} />
                <TextInput source="domain" label="域名" validate={[ required ]}/>
                <TextInput source="mainPageUrl" label="首页地址" />
                <SelectInput source="category" label="类型" choices={[
                    { id: 1, name: '门户网站' },
                    { id: 2, name: '应用系统' },
                ]} validate={[ required ]} />
                <ReferenceInput label="所属部门" source="dept.id" reference="departments" allowEmpty>
                    <SelectOrDefaultInput optionText="name" validate={[ required ]} />
                </ReferenceInput>
                <DateInput source="kbrq" label="开办日期" validate={[ required ]} />
                <TextInput source="icp" label="ICP备案号，使用学校二级域名时可不填" defaultValue="滇ICP备05004791" />
                <LongTextInput source="yt" label="用途" validate={[ required ]} />
            </FormTab>
            <FormTab label="管理员">
                <TextInput source="manager.name" label="姓名" validate={[ required ]} />
                <TextInput source="manager.id" label="一卡通号" validate={[ required ]} />                            
                <NumberInput source="manager.phone" label="手机号" validate={[ required ]} />                
            </FormTab>
            <FormTab label="英文版" >
                <BooleanInput source="hasEnglishVersion" label="是否有英文版网站" />
                <TextInput source="i18nEdition.mainPageUrl" label="英文版首页地址" />
            </FormTab>
            <FormTab label="服务器信息">
                <SelectInput label="托管方式" source="providerInfo.tgfs" choices={[
                    { id: 1, name: '站群系统' },
                    { id: 2, name: '数据中心虚拟机' },
                    { id: 3, name: '自有服务器' },
                    { id: 4, name: '校外第三方服务商' },
                ]} validate={[ required ]} />
                <LongTextInput source="providerInfo.realServersText" 
                    label="服务器地址及端口，每行填写一个服务器地址及端口，网站托管在站群系统可不填"
                    defaultValue="113.55.12.153:80\n113.55.12.248:80" 
                />
                <LongTextInput source="providerInfo.remark" label="网站不在站群系统的原因" />
            </FormTab>
        </TabbedForm>
    </Edit>
);