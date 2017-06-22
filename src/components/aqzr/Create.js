import React, { Component } from 'react';
import { Create, required, SelectInput, DisabledInput, BooleanInput, ReferenceInput, DateInput, email, NumberInput, TextInput, TabbedForm, FormTab, SimpleForm } from 'admin-on-rest';
import { connect } from 'react-redux';
import { change, formValueSelector } from 'redux-form';
// import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import SelectOrDefaultInput from '../SelectOrDefaultInput';

class AqzrCreate extends Component {
    state = {
      wgxx: false,
    }
    componentDidMount() {
      const { change } = this.props;
      change('record-form', 'test', 'test2');
      change('record-form', 'pre_jcjg.wgxx.sfy', false);
    }
    render() {
        const { wgxx } = this.props;
        return (
            <Create {...this.props} title="添加安全责任书信息" >
                <SimpleForm>
                  <ReferenceInput label="所属部门" source="dept.id" reference="zzjg" allowEmpty>
                      <SelectInput optionText="name" />
                  </ReferenceInput>
                  {/*<DateInput source="zrqj.startDate" label="起始日期" validate={[ required ]} />
                  <DateInput source="zrqj.endDate" label="结束日期" validate={[ required ]} />*/}
                  <BooleanInput source="pre_jcjg.wgxx.sfy" label="是否有违规信息" defaultValue={false} />
                  { wgxx && <NumberInput source="pre_jcjg.wgxx.fxsl" label="发现违规信息的数量" validate={[ required ]} /> }
                  { wgxx && <NumberInput source="pre_jcjg.wgxx.qlsl" label="清理违规信息的数量" validate={[ required ]} /> }
                </SimpleForm>
            </Create>
        );
    }
}

const selector = formValueSelector('record-form');
const mapStateToProps = state => ({
  wgxx: selector(state, 'pre_jcjg.wgxx.sfy'),
});
export default connect(mapStateToProps, {
  change,
})(AqzrCreate);