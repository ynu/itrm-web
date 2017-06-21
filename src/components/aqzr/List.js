import React from 'react';
import { List, Datagrid, TextField, ChipField, BooleanField, ReferenceField, ReferenceArrayField, EditButton,DeleteButton } from 'admin-on-rest';
import FlatButton from 'material-ui/FlatButton';
import ContentSave from 'material-ui/svg-icons/content/save';
import {apiHost} from '../../config';
import Welcome from './Welcome';

const DownloadButton = ({record}) => <FlatButton
    label="下载"
    primary={true}
    icon={<ContentSave />}
    href={`${apiHost}/aqzr/${record.id}/docx`}
/>
export default (props) => (
    <div>
        <Welcome />
        <List {...props} title="安全责任书列表" >
        <Datagrid>
            <TextField source="creation.date" label="填报日期" />
            <ReferenceField label="单位名称" source="dept.id" reference="departments" >
                <TextField source="name" />
            </ReferenceField>
            <TextField source="pre_jcjg.wgxx.fxsl" label="违规信息数量" />
            <TextField source="pre_jcjg.wgxx.fxsl" label="已处理违规信息数量" /> 
            <DownloadButton /> 
            <DeleteButton />
        </Datagrid>
    </List>
    </div>
    
);