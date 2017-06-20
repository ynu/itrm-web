import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import Icon from 'material-ui/svg-icons/communication/chat';
import { translate } from 'admin-on-rest';

const styles = {
    card: { borderLeft: 'solid 4px #4caf50', flex: 1, marginLeft: '1em' },
    icon: { float: 'right', width: 64, height: 64, padding: 16, color: '#4caf50' },
};

export default translate(({ value, translate }) => (
    <Card style={styles.card}>
        <Icon style={styles.icon} />
        <CardTitle title={value} subtitle={translate('微博账号')} />
    </Card>
));