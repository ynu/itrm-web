import React from 'react';
import { Create, EditButton, required, SelectInput, DisabledInput, BooleanInput, ReferenceInput, DateInput, email, NumberInput, TextInput, TabbedForm, FormTab } from 'admin-on-rest';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import SelectOrDefaultInput from '../SelectOrDefaultInput';
import WgxxInput from './WgxxInput';

export default (props) => (
    <Create {...props} title="添加安全责任书信息" >
        <TabbedForm>
            <FormTab label="基本信息">
                <ReferenceInput label="所属部门" source="dept.id" reference="departments" allowEmpty>
                    <SelectInput optionText="name" validate={[ required ]} />
                </ReferenceInput>
                {/*<DateInput source="zrqj.startDate" label="起始日期" validate={[ required ]} />
                <DateInput source="zrqj.endDate" label="结束日期" validate={[ required ]} />*/}
            </FormTab>
            <FormTab label="检查结果">
                <BooleanInput source="pre_jcjg.wgxx.sfy" label="是否有违规信息" defaultValue={false} />
                <NumberInput source="pre_jcjg.wgxx.fxsl" label="发现违规信息的数量" validate={[ required ]} />                
                <NumberInput source="pre_jcjg.wgxx.qlsl" label="清理违规信息的数量" validate={[ required ]} />                
            </FormTab>
        </TabbedForm>
    </Create>
);