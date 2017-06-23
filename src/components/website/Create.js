import React, { Component } from 'react';
import { Create, regex, DisabledInput, NumberInput, required, BooleanInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput, TabbedForm, FormTab, DateInput  } from 'admin-on-rest';
import { connect } from 'react-redux';
import { change, formValueSelector } from 'redux-form';
import SelectOrDefaultInput from '../SelectOrDefaultInput';

const urlRegex = regex(/^http(s?):\/\//, '地址必须以http://或https://开头');
class WebsiteCreate extends Component {
    state = {  }
    
    render() {
        const { domain, tgfs, engVersion } = this.props;
        const isYnuDomain = domain.endsWith('.ynu.edu.cn');
        if (isYnuDomain) {
            change('record-form', 'domain', '滇ICP备05004791');
        }
        return (
            <Create {...this.props} title="添加网站或应用系统" >
        <TabbedForm>
            <FormTab label="基本信息">
                <TextInput source="name" label="网站名称" validate={[ required ]} />
                <TextInput source="domain" label="域名" validate={[ required ]}/>
                <TextInput source="mainPageUrl" label="首页地址" validate={[ required, urlRegex ]} />
                <SelectInput source="category" label="类型" choices={[
                    { id: 1, name: '门户网站' },
                    { id: 2, name: '应用系统' },
                ]} validate={[ required ]} />
                <ReferenceInput label="所属部门" source="dept.id" reference="zzjg" allowEmpty>
                      <SelectInput optionText="name" />
                  </ReferenceInput>
                <DateInput source="kbrq" label="开办日期" validate={[ required ]} />
                { !isYnuDomain && <TextInput source="icp" label="ICP备案号" defaultValue="滇ICP备05004791" validate={[ required ]} /> }
                <LongTextInput source="yt" label="用途" validate={[ required ]} />
            </FormTab>
            <FormTab label="管理员">
                <TextInput source="manager.name" label="姓名" validate={[ required ]} />
                <TextInput source="manager.id" label="一卡通号" validate={[ required ]} />                            
                <TextInput source="manager.phone" label="手机号" validate={[ required ]} />                
            </FormTab>
            <FormTab label="英文版" >
                <BooleanInput source="hasEnglishVersion" label="是否有英文版网站" />
                { engVersion && <TextInput source="i18nEdition.mainPageUrl" label="英文版首页地址" validate={[ required ]} /> }
            </FormTab>
            <FormTab label="服务器信息">
                <SelectInput label="托管方式" source="providerInfo.tgfs" choices={[
                    { id: 1, name: '站群系统' },
                    { id: 2, name: '数据中心虚拟机' },
                    { id: 3, name: '自有服务器' },
                    { id: 4, name: '校外第三方服务商' },
                ]} validate={[ required ]} />
                { tgfs !== 1 && <LongTextInput source="providerInfo.realServersText" 
                    label="服务器地址及端口，每行填写一个服务器地址及端口，网站托管在站群系统可不填"
                    defaultValue="113.55.12.153:80\n113.55.12.248:80" 
                    validate={[ required ]} 
                /> }
                { tgfs !== 1 && <LongTextInput source="providerInfo.remark" label="网站不在站群系统的原因" validate={[ required ]} /> }
            </FormTab>
        </TabbedForm>
    </Create>
        );
    }
}

const selector = formValueSelector('record-form');
const mapStateToProps = state => ({
  domain: selector(state, 'domain') || '',
  tgfs: selector(state, 'providerInfo.tgfs'),
  engVersion: selector(state, 'hasEnglishVersion'),
});
export default connect(mapStateToProps, {
  change,
})(WebsiteCreate);
