import React from 'react';
import { simpleRestClient, Admin, Resource, Delete } from 'admin-on-rest';
import chineseMessages from 'aor-language-chinese';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import WechatOAIcon from 'material-ui/svg-icons/av/art-track';
import WeiboIcon from 'material-ui/svg-icons/communication/chat';
import WebsiteIcon from 'material-ui/svg-icons/av/web';
import DepartmentIcon from 'material-ui/svg-icons/social/people';
import AqzrIcon from 'material-ui/svg-icons/action/assignment';

import { WebSite, Department, Wechat, Weibo, Email, Dashboard, Aqzr } from './components';
import authClient from './authClient';
// import Login from './Login';
import Layout from './Layout';
import restClient from './restClient';
import LogoutButton from './components/LogoutButton';

const messages = {
  cn: chineseMessages,
}
const App = () => (
    <Admin
      restClient={restClient}
      locale="cn"
      messages={messages}
      authClient={authClient}
      title="云南大学IT资源管理系统"
      logoutButton={LogoutButton}
      dashboard={Dashboard}
    >

      
      <Resource name="departments" options={{ label: '主管单位' }}
        icon={DepartmentIcon}
        list={Department.List} create={Department.Create} edit={Department.Edit} remove={Delete}
      />
        <Resource name="websites" options={{ label: '网站及应用系统' }}
          icon={WebsiteIcon}
          list={WebSite.List} create={WebSite.Create} edit={WebSite.Edit} remove={Delete} show={WebSite.Show}
        />
        <Resource name="persons" />
        <Resource name="wechatOfficialAccounts" options={{ label: '微信公众号' }}
          icon={WechatOAIcon}
          list={Wechat.List} create={Wechat.Create} edit={Wechat.Edit} remove={Delete}
        />
        <Resource name="weiboAccounts" options={{ label: '微博账号' }}
          icon={WeiboIcon}
          list={Weibo.List} create={Weibo.Create} edit={Weibo.Edit} remove={Delete}
        />
        <Resource name="emails" options={{ label: '公共电子邮箱' }}
          icon={EmailIcon}
          list={Email.List} create={Email.Create} edit={Email.Edit} remove={Delete}
        />
        <Resource name="aqzr" options={{ label: '安全责任书' }}
          icon={AqzrIcon}
          list={Aqzr.List} create={Aqzr.Create} remove={Delete}
        />
    </Admin>
);

export default App;