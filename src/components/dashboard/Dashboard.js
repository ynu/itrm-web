import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import { GET_ONE } from 'admin-on-rest';
import restClient from '../../restClient';
import Welcome from './Welcome';
import WebsitesTotalCount from './WebsitesTotalCount';
import DepartmentsTotalCount from './DepartmentsTotalCount';
import WechatOATotalCount from './WechatOATotalCount';
import WeiboAccountsTotalCount from './WeiboAccountsTotalCount';
import EmailsTotalCount from './EmailsTotalCount';

const styles = {
    card: { borderLeft: 'solid 4px #ff9800', flex: 1, marginLeft: '1em' },
    icon: { float: 'right', width: 64, height: 64, padding: 16, color: '#ff9800' },
    welcome: { marginBottom: '2em' },
    flex: { display: 'flex' },
    leftCol: { flex: 1, marginRight: '1em' },
    rightCol: { flex: 1, marginLeft: '1em' },
    singleCol: { marginTop: '2em' },
};


class Dashboard extends React.Component {
  state = {  }
  async componentDidMount() {
    const res = await restClient(GET_ONE, 'dashboard', { id: '' });
    this.setState(res.data);
  }
  render() {

    const welcome = <Welcome style={styles.welcome} />;
    const { departments, websites, wechatOfficialAccounts, weiboAccounts, emails } = this.state;
    if (!departments) return <div>{welcome}</div>;
    return (
      <div>
        {welcome}
        <div style={styles.flex}>
          <WebsitesTotalCount value={websites.totalCount} />
          <WechatOATotalCount value={wechatOfficialAccounts.totalCount} />
          <WeiboAccountsTotalCount value={weiboAccounts.totalCount} />
          <EmailsTotalCount value={emails.totalCount} />
        </div>
      </div>
      
    );
    }
}

export default Dashboard;