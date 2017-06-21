import React from 'react';
import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import LightBulbIcon from 'material-ui/svg-icons/action/lightbulb-outline';
import HomeIcon from 'material-ui/svg-icons/action/home';
import CodeIcon from 'material-ui/svg-icons/action/code';
import FlatButton from 'material-ui/FlatButton';
import { translate } from 'admin-on-rest';

const style= {
    'margin-bottom': '10px',
}
export default () => (
    <Card style={style}>
        <CardHeader
            title="注意事项"
            subtitle="在填报《安全责任书》之前，请认真阅读以下说明"
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