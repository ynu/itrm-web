import React, {Component} from 'react';
import { Create, EditButton, SelectInput, required, BooleanInput, ReferenceInput, DateInput, NumberInput, TextInput, TabbedForm, FormTab } from 'admin-on-rest';
// import SelectOrDefaultInput from '../SelectOrDefaultInput';
import { connect } from 'react-redux';
import { formValueSelector, change } from 'redux-form';

class WecahtOfficialAccountCreate extends Component {
    state = {  }
    componentDidMount() {
        this.props.change('record-form', 'certification.yrz', false);
    }
    render() {
        const {yrz} = this.props;
        return (
            <Create {...this.props} title="添加微信公众号" >
        <TabbedForm>
            <FormTab label="基本信息">
                <TextInput source="name" label="名称" validate={[ required ]} />
                <TextInput source="account" label="微信号" validate={[ required ]} />
                <ReferenceInput label="所属部门" source="dept.id" reference="zzjg" allowEmpty>
                      <SelectInput optionText="name" />
                  </ReferenceInput>
                <SelectInput source="type" label="类型" optionText="id" choices={[
                    { id: '订阅号' },
                    { id: '服务号' },
                    { id: '企业号' },
                    { id: '小程序' },
                ]} validate={[ required ]} />
                <DateInput source="kbrq" label="开办日期" validate={[ required ]} />

            </FormTab>
            <FormTab label="管理员">
                <TextInput source="manager.name" label="姓名" validate={[ required ]} />
                <TextInput source="manager.id" label="一卡通号" validate={[ required ]} />                            
                <TextInput source="manager.phone" label="手机号" validate={[ required ]} />                
            </FormTab>
            <FormTab label="认证情况">
                <BooleanInput source="certification.yrz" label="是否已经认证" />
                { yrz && <TextInput source="certification.zt" label="认证主体" validate={[ required ]} /> }        
                { yrz && <DateInput source="certification.dqrq" label="认证到期日期" validate={[ required ]} /> }
            </FormTab>
        </TabbedForm>
    </Create>
        );
    }
}

const selector = formValueSelector('record-form');
const mapStateToProps = state => ({
    yrz: selector(state, 'certification.yrz'),
})
export default connect(mapStateToProps, {
    change,
})(WecahtOfficialAccountCreate);