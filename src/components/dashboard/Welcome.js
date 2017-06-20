import React from 'react';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import LightBulbIcon from 'material-ui/svg-icons/action/lightbulb-outline';
import HomeIcon from 'material-ui/svg-icons/action/home';
import CodeIcon from 'material-ui/svg-icons/action/code';
import FlatButton from 'material-ui/FlatButton';
import { translate } from 'admin-on-rest';

export default translate(({ style, translate }) => (
    <Card style={style}>
        <CardHeader
            title={translate('欢迎使用云南大学IT资源管理系统')}
            subtitle={translate('在使用系统申请、填报IT资源之前，您需要先填写本单位相关信息。')}
            avatar={<Avatar backgroundColor="#FFEB3B" icon={<LightBulbIcon />} />}
        />
        <CardActions style={{ textAlign: 'right' }}>
            <FlatButton label={translate('添加单位信息')} icon={<HomeIcon />} href="https://marmelab.com/admin-on-rest/" />
        </CardActions>
    </Card>
));