import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import Icon from 'material-ui/svg-icons/av/web';
import { translate } from 'admin-on-rest';

const styles = {
    card: { borderLeft: 'solid 4px #ff9800', flex: 1, marginLeft: '1em' },
    icon: { float: 'right', width: 64, height: 64, padding: 16, color: '#ff9800' },
};

export default translate(({ value, translate }) => (
    <Card style={styles.card}>
        <Icon style={styles.icon} />
        <CardTitle title={value} subtitle={translate('网站及应用系统')} />
    </Card>
));