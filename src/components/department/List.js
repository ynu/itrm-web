import React, { Component } from 'react';
import { List, Datagrid, TextField, ChipField, ShowButton, ReferenceField, ReferenceArrayField, EditButton, DeleteButton, FunctionField } from 'admin-on-rest';
import { connect } from 'react-redux';
import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import LightBulbIcon from 'material-ui/svg-icons/action/lightbulb-outline';
import FetchUser from '../../FetchUser';
import DynamicButton from '../DynamicButton';
import { isAdminOrCreator } from '../../config';

const style= {
    marginBottom: '10px',
}

class Welcome extends Component {
    state = {  }
    render() {
        return (
            <Card style={style}>
                <CardHeader
                    title="注意事项"
                    subtitle="在填写“使用单位信息”之前，请认真阅读以下说明"
                    avatar={<Avatar backgroundColor="#FFEB3B" icon={<LightBulbIcon />} />}
                />
                <CardText>
                    <ol>
                        <li>在填报之前，请先完成各项IT资源的资料收集、填写工作；</li>
                        <li>每个单位仅需要填报一份《安全责任书》；</li>
                        <li>网络填报完成之后，请下载《安全责任书》，打印后签字盖章，并按校保密委的要求报送。</li>
                    </ol>
                </CardText>
            </Card>
        );
    }
};

class ListDepartments extends Component {
    state = {  }
    render() {
        const { user } = this.props;
        return (
            <div>
                <FetchUser />
                <Welcome />
                <List {...this.props} title="使用单位" >
                    <Datagrid>
                        <TextField source="name" label="单位名称" />
                        <ChipField source="zyfzr.name" label="主要负责人" />
                        <ChipField source="bmscy.name" label="保密审查员" />
                        <ShowButton />
                        <DynamicButton show={isAdminOrCreator.bind(this, user)}  button={<DeleteButton />} />
                        <DynamicButton show={isAdminOrCreator.bind(this, user)}  button={<EditButton />} />
                    </Datagrid>
                </List>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
});
export default connect(mapStateToProps)(ListDepartments);